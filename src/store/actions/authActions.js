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
      payload: err,
    });
  }
};
