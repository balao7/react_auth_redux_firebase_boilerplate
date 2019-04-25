import * as actionTypes from './actionTypes';
import { getFirestore } from 'redux-firestore';

export const signIn = data => async (dispatch, getState, { getFirebase }) => {
  // We get a firebase instance here
  const firebase = getFirebase();

  try {
    await firebase.auth().signInWithEmailAndPassword(data.email, data.password);
    dispatch({
      type: actionTypes.AUTH_SUCCESS,
    });
  } catch (err) {
    dispatch({
      type: actionTypes.AUTH_FAIL,
      payload: err.message,
    });
  }
};

export const signOut = () => async (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();

  try {
    await firebase.auth().signOut();
  } catch (err) {
    console.log('err logging out');
  }
};

export const signUp = data => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firebase = getFirebase();
  const firestore = getFirestore();

  try {
    // create new user
    const res = await firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password);

    // save user to firebase with the doc id being the new created id we got from the response
    await firestore
      .collection('users')
      .doc(res.user.uid)
      .set({
        firstName: data.firstName,
        lastName: data.lastName,
      });

    // dispatch signup success
    dispatch({
      type: actionTypes.SIGNUP_SUCCESS,
    });
  } catch (err) {
    dispatch({
      type: actionTypes.SIGNUP_FAIL,
      payload: err.message,
    });
  }
};

export const setRedirectAfterLogin = url => ({
  type: actionTypes.SET_REDIRECT_AFTER_LOGIN,
  payload: url,
});
