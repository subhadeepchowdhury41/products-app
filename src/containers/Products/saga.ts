import {
  addProductFailure,
  addProductSuccess,
  deleteProductFailure,
  deleteProductSuccess,
  setCollectionData,
  updateProductFailure,
  updateProductSuccess,
} from './actions';
import {call, put, take, takeLatest} from 'redux-saga/effects';
import {IAction} from '../../interface/store';
import {ApiService} from '../../services';
import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';
import {
  ADD_PRODUCT_REQUEST,
  DELETE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_REQUEST,
  WATCH_PRODUCTS_COLLECTION,
} from './types';
import {eventChannel} from 'redux-saga';
import firestore from '@react-native-firebase/firestore';

function* addProduct(action: IAction) {
  try {
    const response: FirebaseFirestoreTypes.DocumentData = yield call(
      ApiService.product.add,
      action.payload,
    );
    console.log('response', response);
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
    yield call(ApiService.product.delete, action.payload);
    yield put(deleteProductSuccess(action.payload));
  } catch (e) {
    yield put(deleteProductFailure(e));
  }
}

function* watchProducts() {
  console.log('snapshot', 'snapshot.docs');
  const collectionRef = firestore().collection('products');
  const channel = eventChannel(emit => {
    const unsubscribe = collectionRef.onSnapshot(snapshot => {
      console.log('snapshot', snapshot.docs);
      const data = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
      emit(data);
    });
    return unsubscribe;
  });
  while (true) {
    const data: any = yield take(channel);
    yield put(setCollectionData(data));
  }
}

export function* productSaga() {
  yield takeLatest(WATCH_PRODUCTS_COLLECTION, watchProducts);
  yield takeLatest(ADD_PRODUCT_REQUEST, addProduct);
  yield takeLatest(UPDATE_PRODUCT_REQUEST, updateProduct);
  yield takeLatest(DELETE_PRODUCT_REQUEST, deleteProduct);
}
