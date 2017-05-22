import { EventEmitter } from 'events'
import { isTokenExpired } from './jwtHelper'
import { login } from '../api/AuthApi';
import { browserHistory } from 'react-router';
import { notifySuccess, notifyError } from './Notification';

export default class AuthService extends EventEmitter {

    constructor() {
        super();

        this.login = this.login.bind(this);
        this.setToken = this.setToken.bind(this);
        this.setProfile = this.setProfile.bind(this);
    }

    login(username, password) {
        //debugger;
        //perform the login function and save the token and profile afterwards.
        login(username, password).then(function (result) {
            if (result.status === 'error') {
                //error occured...return...
                notifyError('Failed', result.message);
                return false;
            }
            else {
                this.setToken(result.token);
                this.setProfile(result.profile);
                browserHistory.replace('/home');
                notifySuccess('Welcome', 'CYON Admin Application');
            }
        }.bind(this));

    }

    loggedIn() {
        // Checks if there is a saved token and it's still valid
        const token = this.getToken()
        return !!token && !isTokenExpired(token)
    }

    setToken(accessToken) {
        console.log(accessToken);
        // Saves user access token into local storage
        localStorage.setItem('access_token', accessToken);
    }

    setProfile(profile) {
        // Saves profile data to localStorage
        localStorage.setItem('profile', JSON.stringify(profile))
        // Triggers profile_updated event to update the UI
        this.emit('profile_updated', profile)
    }

    getProfile() {
        // Retrieves the profile data from localStorage
        const profile = localStorage.getItem('profile')
        return profile ? JSON.parse(localStorage.profile) : {}
    }

    getToken() {
        // Retrieves the user token from localStorage
        return localStorage.getItem('access_token')
    }

    logout() {
        // Clear user token and profile data from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('profile');
        browserHistory.replace('/');
    }
}