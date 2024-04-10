import {
  addProductFailure,
  addProductSuccess,
  deleteProductFailure,
  deleteProductSuccess,
  updateProductFailure,
  updateProductSuccess,
} from './actions';
import {call, put, takeLatest} from 'redux-saga/effects';
import {IAction} from '../../interface/store';
import {ApiService} from '../../services';
import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';
import {
  ADD_PRODUCT_REQUEST,
  DELETE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_REQUEST,
} from './types';

function* addProduct(action: IAction) {
  try {
    const response: FirebaseFirestoreTypes.DocumentData = yield call(
      ApiService.product.add,
      action.payload,
    );
    yield put(addProductSuccess({id: response.id, ...action.payload}));
  } catch (e) {
    yield put(addProductFailure(e));
  }
}

function* updateProduct(action: IAction) {
  try {
    yield call(ApiService.product.update, action.payload);
    yield put(updateProductSuccess({...action.payload}));
  } catch (e) {
    yield put(updateProductFailure(e));
  }
}

function* deleteProduct(action: IAction) {
  try {
    yield call(ApiService.product.delete, action.payload.id);
    yield put(deleteProductSuccess(action.payload.id));
  } catch (e) {
    yield put(deleteProductFailure(e));
  }
}

export function* productSaga() {
  yield takeLatest(ADD_PRODUCT_REQUEST, addProduct);
  yield takeLatest(UPDATE_PRODUCT_REQUEST, updateProduct);
  yield takeLatest(DELETE_PRODUCT_REQUEST, deleteProduct);
}
