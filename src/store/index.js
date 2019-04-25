import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import firebase from '../config/Firebase';

import rootReducer from './reducers/rootReducer';

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users', // firebase root where user profiles are stored
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
  attachAuthIsReady: true,
};

// If in development mode, activate the Redux Devtools
const composeEnhancers =
  process.env.NODE_ENV === 'development' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

// Add BOTH store enhancers when making store creator
const store = createStore(
  rootReducer,
  composeEnhancers(
    reduxFirestore(firebase),
    reactReduxFirebase(firebase, rrfConfig),
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
  )
);

export default store;
