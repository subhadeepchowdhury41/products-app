import {
  LOGOUT_REQUEST,
  RESTORE_REQUEST,
  SIGN_IN_REQUEST,
  SIGN_UP_REQUEST,
} from './types';

export const restoreRequest = () => ({
  type: RESTORE_REQUEST,
});

export const signInRequest = (email: string, password: string) => ({
  type: SIGN_IN_REQUEST,
  payload: {email, password},
});

export const signUpRequest = (
  name: string,
  email: string,
  password: string,
) => ({
  type: SIGN_UP_REQUEST,
  payload: {name, email, password},
});

export const logoutRequest = () => ({
  type: LOGOUT_REQUEST,
});
