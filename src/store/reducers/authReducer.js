import * as actionTypes from '../actions/actionTypes';

const initialState = {
  authError: null,
  redirectTo: '/',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.AUTH_SUCCESS:
      return { ...state, authError: null };

    case actionTypes.AUTH_FAIL:
      return { ...state, authError: payload };

    case actionTypes.SIGNUP_SUCCESS:
      return { ...state, authError: null };

    case actionTypes.SIGNUP_FAIL:
      return { ...state, authError: payload };

    case actionTypes.SET_REDIRECT_AFTER_LOGIN:
      return { ...state, redirectTo: payload };

    default:
      return state;
  }
};
