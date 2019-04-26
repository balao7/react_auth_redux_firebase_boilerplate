import * as actionTypes from './actionTypes';

export const signUp = data => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firebase = getFirebase();
  const firestore = getFirestore();
  dispatch({ type: actionTypes.AUTH_START });
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
    dispatch(sendVerificationEmail());
  } catch (err) {
    dispatch({
      type: actionTypes.SIGNUP_FAIL,
      payload: err.message,
    });
  }
  dispatch({ type: actionTypes.AUTH_END });
};

export const signIn = data => async (dispatch, getState, { getFirebase }) => {
  // We get a firebase instance here
  const firebase = getFirebase();
  dispatch({ type: actionTypes.AUTH_START });
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
  dispatch({ type: actionTypes.AUTH_END });
};

export const signOut = () => async (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();

  try {
    await firebase.auth().signOut();
  } catch (err) {
    console.log('err logging out');
  }
};

export const sendVerificationEmail = () => async (
  dispatch,
  getState,
  { getFirebase }
) => {
  const user = getFirebase().auth().currentUser;
  try {
    await user.sendEmailVerification();
    // dispatch email sent message here
    console.log('email sent');
  } catch (err) {
    console.log(err.message);
    // dispatch email fail message here
  }
};

export const updateProfile = data => async (
  dispatch,
  getState,
  { getFirestore, getFirebase }
) => {
  const firestore = getFirestore();
  const firebase = getFirebase();
  console.log(firebase);
  console.log(firebase.auth());
  console.log(firebase.auth().currentUser);
  const userId = getState().firebase.auth.uid;
  dispatch({ type: actionTypes.AUTH_START });
  try {
    // save user to firebase with the doc id being the new created id we got from the response
    await firestore
      .collection('users')
      .doc(userId)
      .set({
        firstName: data.firstName,
        lastName: data.lastName,
      });
    dispatch({ type: actionTypes.EDIT_PROFILE_SUCCESS });
  } catch (err) {
    dispatch({ type: actionTypes.EDIT_PROFILE_FAIL, payload: err.message });
  }
  dispatch({ type: actionTypes.AUTH_END });
};
