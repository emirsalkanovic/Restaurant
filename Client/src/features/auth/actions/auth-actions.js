import * as types from './auth-actions-types';
import { auth } from '../../../config/auth';
import { axiosInstance } from '../../../config/axios';


function signupRequest() {
    return {
      type: types.SIGNUP_REQUEST
    };
  }
  
  function signupSuccess(response) {
    return {
      type: types.SIGNUP_SUCCESS,
      payload: response.data
    };
  }
  
  function signupFailure(error) {
    return {
      type: types.SIGNUP_FAIL,
      payload: error
    };
  }


export function signup(userName, password, role) {
    console.log('email ACTIONS', userName)
    console.log('passowrd ACTIONS', password)
    console.log('role ACTIONS', role)
    return async (dispatch) => {
      dispatch(signupRequest());
      try {
        const response =
          await axiosInstance.post('/signup', {
            userName,
            password,
            role
          }
          );
        // dispatch(signupSuccess(response));
      } catch (error) {
        // dispatch(signupFailure(error.message));
      }
    };
  }