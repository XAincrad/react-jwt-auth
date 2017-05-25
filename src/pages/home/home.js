import React, { Component } from 'react';
import './home.css';

import PageTitle from '../shared/pagetitle/pagetitle';
import Footer from '../shared/footer/footer';

class Home extends Component {
    render() {
        return (
            <div className="page-inner">
                <PageTitle title="Dashboard" />
                <div id="main-wrapper">
                    <div className="row">
                        Welcome...
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Home;
