import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../hoc/utility/updateObject';

const initialState = {
  profile: {
    error: null,
    loading: false,
  },
  verificationEmail: {
    error: null,
    loading: false,
  },
  passwordRecovery: {
    error: null,
    loading: false,
  },
  deleteUser: {
    error: null,
    loading: false,
  },
  error: null,
  loading: false,
};

const authSuccess = state => {
  return updateObject(state, { error: null });
};

const authFail = (state, payload) => {
  return updateObject(state, { error: payload });
};

const authStart = state => {
  return updateObject(state, { loading: true, error: null });
};

const authEnd = state => {
  return updateObject(state, { loading: false });
};

const signUpSuccess = state => {
  return updateObject(state, { error: null });
};

const signUpFail = (state, payload) => {
  return updateObject(state, { error: payload });
};

const editProfileStart = state => {
  return updateObject(state, {
    profile: updateObject(state.profile, {
      loading: true,
    }),
  });
};

const editProfileSuccess = state => {
  return updateObject(state, {
    profile: updateObject(state.profile, {
      error: false,
      loading: false,
    }),
  });
};

const editProfileFail = (state, payload) => {
  return updateObject(state, {
    profile: updateObject(state.profile, {
      error: payload,
      loading: false,
    }),
  });
};

const verificationEmailStart = state => {
  return updateObject(state, {
    verificationEmail: updateObject(state.verificationEmail, {
      loading: true,
    }),
  });
};

const verificationEmailSuccess = state => {
  return updateObject(state, {
    verificationEmail: updateObject(state.verificationEmail, {
      error: false,
      loading: false,
    }),
  });
};

const verificationEmailFail = (state, payload) => {
  return updateObject(state, {
    verificationEmail: updateObject(state.verificationEmail, {
      error: payload,
      loading: false,
    }),
  });
};

const recoverPasswordStart = state => {
  return updateObject(state, {
    passwordRecovery: updateObject(state.passwordRecovery, {
      loading: true,
    }),
  });
};

const recoverPasswordSuccess = state => {
  return updateObject(state, {
    passwordRecovery: updateObject(state.passwordRecovery, {
      error: false,
      loading: false,
    }),
  });
};

const recoverPasswordFail = (state, payload) => {
  return updateObject(state, {
    passwordRecovery: updateObject(state.passwordRecovery, {
      error: payload,
      loading: false,
    }),
  });
};

const userDeleteStart = state => {
  return updateObject(state, {
    deleteUser: updateObject(state.deleteUser, { loading: true }),
  });
};

const userDeleteSuccess = state => {
  return updateObject(state, {
    deleteUser: updateObject(state.deleteUser, { loading: false, error: null }),
  });
};

const userDeleteFail = (state, payload) => {
  return updateObject(state, {
    deleteUser: updateObject(state.deleteUser, {
      loading: false,
      error: payload,
    }),
  });
};

const clear = state => {
  return updateObject(state, {
    profile: updateObject(state.profile, {
      error: null,
    }),
    verificationEmail: updateObject(state.verificationEmail, {
      error: null,
    }),
    passwordRecovery: updateObject(state.passwordRecovery, {
      error: null,
    }),
    deleteUser: updateObject(state.deleteUser, { error: null }),
    error: null,
  });
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state);

    case actionTypes.AUTH_FAIL:
      return authFail(state, payload);

    case actionTypes.AUTH_START:
      return authStart(state);

    case actionTypes.AUTH_END:
      return authEnd(state);

    case actionTypes.SIGNUP_SUCCESS:
      return signUpSuccess(state);

    case actionTypes.SIGNUP_FAIL:
      return signUpFail(state, payload);

    case actionTypes.EDIT_PROFILE_START:
      return editProfileStart(state);

    case actionTypes.EDIT_PROFILE_SUCCESS:
      return editProfileSuccess(state);

    case actionTypes.EDIT_PROFILE_FAIL:
      return editProfileFail(state, payload);

    case actionTypes.VERIFICATION_EMAIL_START:
      return verificationEmailStart(state);

    case actionTypes.VERIFICATION_EMAIL_SUCCESS:
      return verificationEmailSuccess(state);

    case actionTypes.VERIFICATION_EMAIL_FAIL:
      return verificationEmailFail(state, payload);

    case actionTypes.RECOVER_PASSWORD_START:
      return recoverPasswordStart(state);

    case actionTypes.RECOVER_PASSWORD_SUCCESS:
      return recoverPasswordSuccess(state);

    case actionTypes.RECOVER_PASSWORD_FAIL:
      return recoverPasswordFail(state, payload);

    case actionTypes.DELETE_USER_START:
      return userDeleteStart(state);

    case actionTypes.DELETE_USER_SUCCESS:
      return userDeleteSuccess(state);

    case actionTypes.DELETE_USER_FAIL:
      return userDeleteFail(state, payload);

    case actionTypes.CLEAR:
      return clear(state);

    default:
      return state;
  }
};
