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
            button = <Loader color="#26A65B" size="20px" margin="4px"/>;
        } else {
            button = <button type="submit" className="btn btn-success btn-block">Login</button>;
        }

        return (
            <main className="page-login page-content">
                <div className="page-inner">
                    <div id="main-wrapper">
                        <div className="row">
                            <div className="col-md-3 center">
                                <div className="login-box">
                                    <a href="index-2.html" className="logo-name text-lg text-center">
                                        <img src="assets/images/cyonLogoTrans.png" alt="" />
                                    </a>
                                    <br/>
                                    <h1 className="center"><b>CYON</b></h1>
                                    <p className="text-center m-t-md">Please login into your account.</p>
                                    <form className="m-t-md" onSubmit={this.login.bind(this)}>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Username" required
                                                value={this.state.username}
                                                onChange={(event) => this.setState({ username: event.target.value })} />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control" placeholder="Password" required
                                                value={this.state.password}
                                                onChange={(event) => this.setState({ password: event.target.value })} />
                                        </div>
                                        {button}
                                        <a href="forgot.html" className="display-block text-center m-t-md text-sm">Forgot Password?</a>
                                    </form>
                                    <p className="text-center m-t-xs text-sm">CYON, St Alphonsus Catholic Church, Akute &copy; 2017</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }

}

export default Login;
