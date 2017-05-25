import React, { Component } from 'react';
import './header.css';

class Header extends Component {

    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout() {
        this.props.auth.logout();
    }

    render() {
        return (
            <div className="navbar">
                <div className="navbar-inner">
                    <div className="sidebar-pusher">
                        <a onClick={() => this.props.toggleMenu() } className="waves-effect waves-button waves-classic push-sidebar">
                            <i className="fa fa-bars"></i>
                        </a>
                    </div>
                    <div className="logo-box">
                        <a href="index-2.html" className="logo-text"><span>Modern</span></a>
                    </div>
                    <div className="topmenu-outer bg-light">
                        <div className="top-menu">
                            <ul className="nav navbar-nav navbar-right">
                                <li>	
                                    <a href="#" className="waves-effect waves-button waves-classic show-search"><i className="fa fa-search"></i></a>
                                </li>
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle waves-effect waves-button waves-classic" data-toggle="dropdown"><i className="fa fa-envelope"></i><span className="badge badge-danger pull-right">4</span></a>
                                    <ul className="dropdown-menu title-caret dropdown-lg" role="menu">
                                        <li><p className="drop-title">You have 4 new  messages !</p></li>
                                        <li className="dropdown-menu-list slimscroll messages">
                                            <ul className="list-unstyled">
                                                <li>
                                                    <a href="#">
                                                        <div className="msg-img"><div className="online on"></div><img className="img-circle" src="assets/images/avatar2.png" alt=""/></div>
                                                        <p className="msg-name">Sandra Smith</p>
                                                        <p className="msg-text">Hey ! I'm working on your project</p>
                                                        <p className="msg-time">3 minutes ago</p>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <div className="msg-img"><div className="online off"></div><img className="img-circle" src="assets/images/avatar4.png" alt=""/></div>
                                                        <p className="msg-name">Amily Lee</p>
                                                        <p className="msg-text">Hi David !</p>
                                                        <p className="msg-time">8 minutes ago</p>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="drop-all"><a href="#" className="text-center">All Messages</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle waves-effect waves-button waves-classic" data-toggle="dropdown"><i className="fa fa-bell"></i><span className="badge badge-danger pull-right">3</span></a>
                                    <ul className="dropdown-menu title-caret dropdown-lg" role="menu">
                                        <li><p className="drop-title">You have 3 pending tasks !</p></li>
                                        <li className="dropdown-menu-list slimscroll tasks">
                                            <ul className="list-unstyled">
                                                <li>
                                                    <a href="#">
                                                        <div className="task-icon badge badge-success"><i className="icon-user"></i></div>
                                                        <span className="badge badge-roundless badge-default pull-right">1min ago</span>
                                                        <p className="task-details">New user registered.</p>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="drop-all"><a href="#" className="text-center">All Tasks</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle waves-effect waves-button waves-classic" data-toggle="dropdown">
                                        <span className="user-name">David<i className="fa fa-angle-down"></i></span>
                                        <img className="img-circle avatar" src="assets/images/avatar1.png" width="40" height="40" alt=""/>
                                    </a>
                                    <ul className="dropdown-menu dropdown-list" role="menu">
                                        <li role="presentation"><a href="profile.html"><i className="fa fa-user"></i>Profile</a></li>
                                        <li role="presentation" className="divider"></li>
                                        <li role="presentation"><a><i className="fa fa-lock"></i>Lock screen</a></li>
                                        <li role="presentation"><a><i className="fa fa-sign-out m-r-xs"></i>Log out</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="login.html" className="log-out waves-effect waves-button waves-classic">
                                        <span><i className="fa fa-sign-out m-r-xs"></i>Log out</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Header;
