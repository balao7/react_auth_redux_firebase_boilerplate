import * as actionTypes from './actionTypes';

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
