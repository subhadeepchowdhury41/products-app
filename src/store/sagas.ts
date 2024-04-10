import {all} from 'redux-saga/effects';
import {productSaga} from '../containers/Products/saga';
import authSaga from '../containers/Auth/saga';

function* rootSaga() {
  yield all([productSaga(), authSaga()]);
}

export default rootSaga;
