import {combineReducers} from 'redux';
import productReducer from '../containers/Products/reducer';
import authReducer from '../containers/Auth/reducer';

export const combinedReducers = combineReducers({
  product: productReducer,
  auth: authReducer,
});
