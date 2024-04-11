import Toast from 'react-native-toast-message';
import {IAction} from '../../interface/store';
import {
  ADD_PRODUCT_FAILURE,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  SET_COLLECTION_DATA,
  UPDATE_PRODUCT_FAILURE,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
} from './types';
import {navigate} from '../../services/navigation';

interface Product {
  id: string;
  price: number;
  name: string;
  title: string;
  description: string;
  discount: number;
}

interface ProductsState {
  products: Array<Product>;
  loading: boolean;
  error?: string | null | undefined;
}

const initialState: ProductsState = {
  products: [],
  loading: false,
};

const productReducer = (
  state: ProductsState = initialState,
  action: IAction,
) => {
  switch (action.type) {
    case SET_COLLECTION_DATA:
      console.log('action.payload', action.payload);
      return {...state, products: action.payload};
    case ADD_PRODUCT_REQUEST:
    case UPDATE_PRODUCT_REQUEST:
    case DELETE_PRODUCT_REQUEST:
      return {...state, loading: true};
    case ADD_PRODUCT_SUCCESS:
    case UPDATE_PRODUCT_SUCCESS:
    case DELETE_PRODUCT_SUCCESS:
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'Product added successfully',
      });
      navigate('Browse');
      return {
        ...state,
        loading: false,
      };
    case ADD_PRODUCT_FAILURE:
    case DELETE_PRODUCT_FAILURE:
    case UPDATE_PRODUCT_FAILURE:
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: action.payload,
      });
      return {...state, loading: false, error: action.payload};
    default:
      return state;
  }
};

export default productReducer;
