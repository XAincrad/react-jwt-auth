import axios from 'axios';

const BASE_URL = 'http://localhost:1337';

export { login, getCelebrityData };

function login(username, password) {
    const url = `${BASE_URL}/api/login`;
    return axios.put(url, {
        username : username,
        password : password
    }).then(function(response) {
        return {
            status : 'success',
            token : response.headers['x-auth-token'],
            profile : response.data
        }
    }).catch(function(error) {
        if(error.status >= 300 || error.status < 200) {
            //invalid details supplied or server error...return...
            console.log(error.response.data);
            return {
                status : 'error',
                message : error.response.data.description
            };
        }
        return {
            status : 'error',
            message : 'Error occured on the server. Kindly retry in a few minutes.'
        };
    });
}

function getCelebrityData() {
    const url = `${BASE_URL}/api/jokes/celebrity`;
    return axios.get(url).then(response => response.data);
}