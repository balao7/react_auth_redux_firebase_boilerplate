import * as actionTypes from '../actions/actionTypes';

const initialState = {
  authError: null,
  profileError: null,
  loadingAuth: false,
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

    case actionTypes.EDIT_PROFILE_SUCCESS:
      return { ...state, profileError: null };

    case actionTypes.EDIT_PROFILE_FAIL:
      return { ...state, authError: payload };

    case actionTypes.AUTH_START:
      return { ...state, loadingAuth: true };

    case actionTypes.AUTH_END:
      return { ...state, loadingAuth: false };

    default:
      return state;
  }
};
