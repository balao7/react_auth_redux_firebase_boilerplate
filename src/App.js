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
import VerifyEmail from './containers/auth/verifyEmail/VerifyEmail';
import RecoverPassword from './containers/auth/recoverPassword/RecoverPassword';

function App({ auth }) {
  console.log(auth.emailVerified);
  let routes;

  // logged but not verified
  if (auth.uid && auth.emailVerified === false) {
    routes = (
      <Switch>
        <Route exact path="/verify-email" component={VerifyEmail} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/logout" component={Logout} />
        <Redirect to="/verify-email" />
      </Switch>
    );
  } else if (auth.uid) {
    // logged routes
    routes = (
      <Switch>
        <Route exact path="/protected" component={ExampleContainer} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/" component={Home} />
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
        <Route exact path="/recover-password" component={RecoverPassword} />
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
