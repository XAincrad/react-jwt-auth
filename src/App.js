import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router'
import './App.css';

import AuthService from './util/AuthService'

//import page components...
import Dashboard from './pages/dashboard/dashboard';
import Login from './login/login';
import Home from './pages/home/home';
import Profile from './pages/profile/profile';

const auth = new AuthService();

const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' })
  }
}

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
          <Route path="/">
            <IndexRedirect to="/home" />
            <Route path="login" component={() => (<Login auth={auth}/>)} />
            <Route component={Dashboard} auth={auth} onEnter={requireAuth}>
              <Route path="home" component={Home} />
              <Route path="profile" component={Profile} />
            </Route>
          </Route>
      </Router>
    );
  }
}

export default App;
