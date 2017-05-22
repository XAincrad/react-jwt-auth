import React, { Component } from 'react';
import './login.css';

var Loader = require('halogen/ClipLoader');

class Login extends Component {

    getAuthParams() {
        return {
            email: this.state.username,
            password: this.state.password
        }
    }

    login(e) {
        e.preventDefault();
        this.setState({ loading: true })
        const { email, password } = this.getAuthParams();
        var valid = this.props.auth.login(email, password);
        if (!valid) {
            this.setState({ loading: false })
        }
    }

    state = {
        username: 'ope.akinnawo@gmail.com',
        password: 'password12',
        loading: false
    }

    handleSubmit = (event) => {
        event.preventDefault();
        alert('A user was submitted: ' + this.state.username + ',' + this.state.password);
    }

    render() {
        const loading = this.state.loading;

        let button = null;
        if (loading) {
            button = <Loader color="#26A65B" size="20px" margin="4px" />;
        } else {
            button = <button type="submit" className="btn btn-primary block full-width m-b">Login</button>
        }

        return (
            <div className="middle-box text-center loginscreen animated fadeInDown">
                <div>
                    <div>
                        <h1 className="logo-name">
                            <img src="assets/images/cyonLogoTrans.png" alt="" />
                        </h1>
                    </div>
                    <h2>CYON</h2>
                    <p>Please login into your account.</p>
                    <form className="m-t" role="form" onSubmit={this.login.bind(this)}>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Username" required="" 
                            value={this.state.username}
                            onChange={(event) => this.setState({ username: event.target.value })}/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Password" required=""
                            value={this.state.password}
                            onChange={(event) => this.setState({ password: event.target.value })} />
                        </div>
                        {button}
                        <a href="#"><small>Forgot password?</small></a>
                    </form>
                    <p className="m-t"> <small>CYON, St Alphonsus Catholic Church, Akute &copy; 2017</small> </p>
                </div>
            </div>
        );
    }

}

export default Login;
