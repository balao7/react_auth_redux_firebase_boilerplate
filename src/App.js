import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './Hoc/Layout/Layout';
import Home from './Containers/Home/Home';
import ExampleContainer from './Containers/ExampleContainer/ExampleContainer';
import Auth from './Containers/Auth/Auth';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/protected" component={ExampleContainer} />
        <Route path="/login" component={Auth} />
        <Route path="/register" component={Auth} />
        <Route path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </Layout>
  );
}

export default App;
