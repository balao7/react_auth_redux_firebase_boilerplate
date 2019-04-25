import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: 'authentication-boilerpla-ef1f4.firebaseapp.com',
  databaseURL: 'https://authentication-boilerpla-ef1f4.firebaseio.com',
  projectId: 'authentication-boilerpla-ef1f4',
  storageBucket: 'authentication-boilerpla-ef1f4.appspot.com',
  messagingSenderId: '10190348624',
};
firebase.initializeApp(config);
firebase.firestore();

export default firebase;
