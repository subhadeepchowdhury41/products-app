import {IAction} from '../../interface/store';
import {
  ADD_PRODUCT_FAILURE,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAILURE,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
} from './types';

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
    case ADD_PRODUCT_REQUEST:
    case UPDATE_PRODUCT_REQUEST:
    case DELETE_PRODUCT_REQUEST:
      return {...state, loading: true};
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        products: [...state.products, action.payload],
        loading: false,
      };
    case ADD_PRODUCT_FAILURE:
      return {...state, loading: false};
    case UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        error: null,
        products: state.products.map(product => {
          if (product.id !== action.payload.id) {
            return product;
          }
          return {...product, ...action.payload};
        }),
        loading: false,
      };
    case UPDATE_PRODUCT_FAILURE:
      return {...state, laoding: false, error: action.payload};
    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        products: state.products.filter(
          product => product.id !== action.payload.id,
        ),
        loading: false,
      };
    case DELETE_PRODUCT_FAILURE:
      return {...state, loading: false, error: action.payload};
    default:
      return state;
  }
};

export default productReducer;
