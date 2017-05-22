import React, { Component } from 'react';
import './dashboard.css';

//import other classes...
import Header from './pages/shared/header/header';
import Sidemenu from './pages/shared/sidemenu/sidemenu';

class Dashboard extends Component {
    render() {
        return (
            <div id="wrapper">
                <Header auth={this.props.route.auth} />
                <div id="page-wrapper" class="gray-bg dashbard-1">
                    <Sidemenu auth={this.props.route.auth}/>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="wrapper wrapper-content">
                                {this.props.children}
                            </div>
                            <Footer/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
