import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  RESTORE_REQUEST,
} from './types';
import {IAction} from '../../interface/store';
import {ApiService} from '../../services';

function* restoreAuth() {
  try {
    const user = auth().currentUser;
    const userData: any = yield call(ApiService.user.get, user?.uid);
    yield put({
      type: SIGN_IN_SUCCESS,
      payload: {userid: user?.uid, ...userData},
    });
  } catch (error) {
    yield put({type: SIGN_IN_FAILURE, payload: error});
  }
}

function* signIn(action: IAction) {
  try {
    const {email, password} = action.payload;
    yield call(ApiService.auth.signIn, email, password);
    const user = auth().currentUser;
    const userData: any = yield call(ApiService.user.get, user?.uid);
    yield put({
      type: SIGN_IN_SUCCESS,
      payload: {userId: user?.uid, ...userData},
    });
  } catch (error) {
    yield put({type: SIGN_IN_FAILURE, payload: error});
  }
}

function* signUp(action: IAction) {
  try {
    const {name, email, password} = action.payload;
    const userCredential: FirebaseAuthTypes.UserCredential = yield call(
      ApiService.auth.signUp,
      email,
      password,
    );
    yield call(ApiService.user.add, userCredential.user.uid, name, email);
    yield put({
      type: SIGN_UP_SUCCESS,
      payload: {id: userCredential.user.uid, name, email},
    });
  } catch (error) {
    yield put({type: SIGN_UP_FAILURE, payload: error});
  }
}

function* logout() {
  try {
    yield call(ApiService.auth.signOut);
    yield put({type: LOGOUT_SUCCESS});
  } catch (error) {
    yield put({type: LOGOUT_FAILURE, payload: error});
  }
}

function* authSaga() {
  yield takeEvery('*', function* logger(action: IAction) {
    console.log('[AUTH]: ', action);
  });
  yield takeLatest(RESTORE_REQUEST, restoreAuth);
  yield takeLatest(SIGN_IN_REQUEST, signIn);
  yield takeLatest(SIGN_UP_REQUEST, signUp);
  yield takeLatest(LOGOUT_REQUEST, logout);
}

export default authSaga;
