import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import Spinner from './components/UI/spinner/Spinner';
import store from './store';
import './index.css';

ReactDOM.render(
  <div className="LoaderWrapper">
    <Spinner />
  </div>,
  document.getElementById('root')
);

// Wait for auth to be ready before showing the whole app to avoid nav links flashing login for a sec when user is logged
store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  );
});
