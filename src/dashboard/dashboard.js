import React, { Component } from 'react';
import './dashboard.css';

//import other classes...
import Header from './pages/shared/header/header';
import Sidemenu from './pages/shared/sidemenu/sidemenu';
import Footer from './pages/shared/footer/footer';

class Dashboard extends Component {
    render() {
        return (
            <div id="wrapper">
                <Header auth={this.props.route.auth} />
                <div id="page-wrapper" class="gray-bg dashbard-1">
                    <Sidemenu auth={this.props.route.auth}/>
                    <div className="row">
                        <div className="col-lg-12">
                            {this.props.children}
                            <Footer/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
