import createSagaMiddleware from 'redux-saga';
import {combinedReducers} from './reducers';
import rootSaga from './sagas';
import {configureStore} from '@reduxjs/toolkit';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: combinedReducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: true,
    }).concat(sagaMiddleware),
  devTools: true,
});

sagaMiddleware.run(rootSaga);
