import {IAction} from '../../interface/store';
import {AuthState} from '../../types/auth.t';
import {
  LOGOUT_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_IN_SUCCESS,
  SIGN_UP_SUCCESS,
} from './types';

const initialState = {
  userId: null,
  user: null,
  error: null,
  splash: true,
};

const authReducer = (state: AuthState = initialState, action: IAction) => {
  switch (action.type) {
    case SIGN_IN_FAILURE:
      return {
        ...state,
        splash: false,
        error: action.payload,
      };
    case SIGN_IN_SUCCESS:
    case SIGN_UP_SUCCESS:
      console.log('user signed in with uid: ', action.payload);
      return {
        ...state,
        splash: false,
        user: action.payload,
        userId: action.payload.id,
        error: null,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
        userId: null,
        error: null,
      };
    default:
      return state;
  }
};

export default authReducer;
