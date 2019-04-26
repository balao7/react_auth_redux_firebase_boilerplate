import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './hoc/layout/Layout';
import Home from './containers/home/Home';
import ExampleContainer from './containers/exampleContainer/ExampleContainer';
import Login from './containers/auth/login/Login';
import SignUp from './containers/auth/signup/Signup';
import Profile from './containers/auth/profile/Profile';
import Logout from './containers/auth/logout/Logout';

function App({ auth }) {
  let routes;
  if (auth.uid) {
    // logged routes
    routes = (
      <Switch>
        <Route path="/protected" component={ExampleContainer} />
        <Route path="/profile" component={Profile} />
        <Route path="/logout" component={Logout} />
        <Route path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    );
  }
  // not logged routes
  else {
    routes = (
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return <Layout>{routes}</Layout>;
}

const mapStateToProps = ({ firebase }) => ({
  auth: firebase.auth,
});

export default connect(mapStateToProps)(App);
