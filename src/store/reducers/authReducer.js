import * as actionTypes from '../actions/actionTypes';

const initialState = {
  authError: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.AUTH_SUCCESS:
      return { ...state, authError: null };

    case actionTypes.AUTH_FAIL:
      return { ...state, authError: payload };

    default:
      return state;
  }
};
