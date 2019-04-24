import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './hoc/layout/Layout';
import Home from './containers/home/Home';
import ExampleContainer from './containers/exampleContainer/ExampleContainer';
import Login from './containers/auth/login/Login';
import SignUp from './containers/auth/signup/Signup';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/protected" component={ExampleContainer} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </Layout>
  );
}

export default App;
