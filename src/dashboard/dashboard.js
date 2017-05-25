import React, { Component } from 'react';
import './dashboard.css';

//import other classes...
import Header from '../pages/shared/header/header';
import Sidemenu from '../pages/shared/sidemenu/sidemenu';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menuVisible : false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState(prevState => ({
            menuVisible : !prevState.menuVisible
        }));
    }

    render() {
        return (
            <main className="page-content content-wrap">
                <Header auth={this.props.route.auth} toggleMenu={this.toggleMenu} menuVisible={this.state.menuVisible} />
                <Sidemenu auth={this.props.route.auth} menuVisible={this.state.menuVisible} />
                {this.props.children}
            </main>
        );
    }
}

export default Dashboard;
