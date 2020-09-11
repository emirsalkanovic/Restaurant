import * as types from '../actions/auth-actions-types';

const SIGNUP_INITIAL_STATE = {
    loading: false,
    results: [],
    shouldSingup: null,
    isAuthenticated: false
};

export function signupReducer(state = SIGNUP_INITIAL_STATE, action) {
    switch (action.type) {
      case types.SIGNUP_REQUEST:
        console.log('dosao u reducer')
        return { ...state, results: [], shouldSignup: false };
      case types.SIGNUP_SUCCESS:
        return {
          ...state,
          results: action,
          shouldSignup: true,
          isAuthenticated: true
        };
      case types.SIGNUP_FAIL:
        return { ...state, error: 'Error while trying to signup', shouldSignup: false };
      case types.LOGOUT_REQUEST:
        return { ...state, isAuthenticated: false };
      default:
        return state;
    }
  }