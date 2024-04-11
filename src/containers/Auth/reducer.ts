import Toast from 'react-native-toast-message';
import {IAction} from '../../interface/store';
import {AuthState} from '../../types/auth.t';
import {
  LOGOUT_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  RESTORE_FAILURE,
  SIGN_IN_FAILURE,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
} from './types';
import {navigate} from '../../services/navigation';

const initialState = {
  userId: null,
  user: null,
  error: null,
  splash: true,
  loading: false,
};

const authReducer = (state: AuthState = initialState, action: IAction) => {
  console.log('[AUTH ACTION]', action.type, action.payload);
  switch (action.type) {
    case SIGN_IN_REQUEST:
    case SIGN_UP_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        loading: true,
        splash: true,
      };
    case SIGN_IN_FAILURE:
      if (action.payload !== 'INIT') {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'Invalid email or password',
        });
        return {
          ...state,
          loading: false,
          splash: false,
          error: action.payload,
        };
      }
      return {
        ...state,
        loading: false,
        splash: false,
        error: action.payload,
      };
    case RESTORE_FAILURE:
      return {
        ...state,
        loading: false,
        splash: false,
        error: action.payload,
      };
    case SIGN_UP_FAILURE:
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Something went wrong!',
      });
      return {
        ...state,
        loading: false,
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
        loading: false,
      };
    case LOGOUT_SUCCESS:
      navigate('Splash');
      return {
        ...state,
        user: null,
        loading: false,
        userId: null,
        error: null,
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
