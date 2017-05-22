import React, { Component } from 'react';
import './sidemmenu.css';

class Sidemenu extends Component {

    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout() {
        this.props.auth.logout();
    }

    render() {
        return (
            <nav className="navbar-default navbar-static-side" role="navigation">
                <div className="sidebar-collapse">
                    <ul className="nav metismenu" id="side-menu">
                        <li className="nav-header center">
                            <div className="dropdown profile-element"> 
                                <span><img alt="image" className="img-circle" src="img/profile_small.jpg" /></span>
                                <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                                    <span className="clear"> <span className="block m-t-xs"> <strong className="font-bold">David Williams</strong>
                                    </span> <span className="text-muted text-xs block">Art Director <b className="caret"></b></span> </span> </a>
                                <ul className="dropdown-menu animated fadeInRight m-t-xs">
                                    <li><a href="profile.html">Profile</a></li>
                                    <li><a href="contacts.html">Contacts</a></li>
                                    <li><a href="mailbox.html">Mailbox</a></li>
                                    <li className="divider"></li>
                                    <li><a href="login.html">Logout</a></li>
                                </ul>
                            </div>
                            <div className="logo-element">IN+</div>
                        </li>
                        <li className="active">
                            <a href="index-2.html"><i className="fa fa-th-large"></i> <span className="nav-label">Dashboard</span></a>
                        </li>
                        <li>
                            <a href="layouts.html"><i className="fa fa-diamond"></i> <span className="nav-label">Profile</span></a>
                        </li>
                        <li>
                            <a href="mailbox.html"><i className="fa fa-envelope"></i> <span className="nav-label">Mailbox </span><span className="label label-warning pull-right">16/24</span></a>
                            <ul className="nav nav-second-level collapse">
                                <li><a href="mailbox.html">Inbox</a></li>
                                <li><a href="mail_detail.html">Email view</a></li>
                                <li><a href="mail_compose.html">Compose email</a></li>
                                <li><a href="email_template.html">Email templates</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="metrics.html"><i className="fa fa-pie-chart"></i> <span className="nav-label">Minutes</span>  </a>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-edit"></i> <span className="nav-label">Coordinators</span><span className="fa arrow"></span></a>
                            <ul className="nav nav-second-level collapse">
                                <li><a href="form_basic.html">Members</a></li>
                                <li><a href="form_advanced.html">Executives</a></li>
                                <li><a href="form_wizard.html">Wizard</a></li>
                                <li><a href="form_file_upload.html">Patrons</a></li>
                                <li><a href="form_editors.html">Priests</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="grid_options.html"><i className="fa fa-laptop"></i> <span className="nav-label">Finance</span></a>
                        </li>
                        <li>
                            <a href="grid_options.html"><i className="fa fa-laptop"></i> <span className="nav-label">Reports</span></a>
                        </li>
                        <li>
                            <a onClick={this.logout}><i className="fa fa-laptop"></i> <span className="nav-label">Logout</span></a>
                        </li>
                    </ul>

                </div>
            </nav>
        );
    }

}

export default Sidemenu;
