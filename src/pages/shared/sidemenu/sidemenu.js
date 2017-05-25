import React, { Component } from 'react';
import './sidemenu.css';

class Sidemenu extends Component {

    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout() {
        this.props.auth.logout();
    }

    render() {
        let sidebar = null;
        if (!this.props.menuVisible) {
            sidebar = 'page-sidebar sidebar'
        } else {
            sidebar = 'page-sidebar sidebar visible'
        }

        return (
            <div className={sidebar}>
                <div className="page-sidebar-inner slimscroll">
                    <div className="sidebar-header">
                        <div className="sidebar-profile">
                            <a href="javascript:void(0);" id="profile-menu-link">
                                <div className="sidebar-profile-image">
                                    <img src="assets/images/profile-menu-image.png" className="img-circle img-responsive" alt=""/>
                                </div>
                                <div className="sidebar-profile-details">
                                    <span>David Green<br/><small>Art Director</small></span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <ul className="menu accordion-menu">
                        <li className="active"><a href="index-2.html" className="waves-effect waves-button"><span className="menu-icon glyphicon glyphicon-home"></span><p>Dashboard</p></a></li>
                        <li><a href="profile.html" className="waves-effect waves-button"><span className="menu-icon glyphicon glyphicon-user"></span><p>Profile</p></a></li>
                        <li className="droplink"><a href="#" className="waves-effect waves-button"><span className="menu-icon glyphicon glyphicon-envelope"></span><p>Mailbox</p><span className="arrow"></span></a>
                            <ul className="sub-menu">
                                <li><a href="inbox.html">Inbox</a></li>
                                <li><a href="message-view.html">View Message</a></li>
                                <li><a href="compose.html">Compose</a></li>
                            </ul>
                        </li>
                        <li><a href="profile.html" className="waves-effect waves-button"><span className="menu-icon glyphicon glyphicon-user"></span><p>Minutes</p></a></li>
                        <li className="droplink"><a href="#" className="waves-effect waves-button"><span className="menu-icon glyphicon glyphicon-th"></span><p>Coordinators</p><span className="arrow"></span></a>
                            <ul className="sub-menu">
                                <li><a href="layout-blank.html">Members</a></li>
                                <li><a href="layout-boxed.html">Executives</a></li>
                                <li><a href="layout-horizontal-menu.html">Patrons</a></li>
                                <li><a href="layout-horizontal-menu-boxed.html">Priests</a></li>
                            </ul>
                        </li>
                        <li><a href="profile.html" className="waves-effect waves-button"><span className="menu-icon glyphicon glyphicon-user"></span><p>Finance</p></a></li>
                        <li><a href="profile.html" className="waves-effect waves-button"><span className="menu-icon glyphicon glyphicon-user"></span><p>Reports</p></a></li>
                        <li><a href="/login" onClick={this.logout} className="waves-effect waves-button"><span className="menu-icon glyphicon glyphicon-user"></span><p>Logout</p></a></li>
                    </ul>
                </div>
            </div>
        );
    }

}

export default Sidemenu;
