export const ADD_PRODUCT_REQUEST = '[Products] ADD_PRODUCT_REQUEST';
export const ADD_PRODUCT_SUCCESS = '[Products] ADD_PRODUCT_SUCCESS';
export const ADD_PRODUCT_FAILURE = '[Products] ADD_PRODUCT_FAILURE';

export const UPDATE_PRODUCT_REQUEST = '[Products] UPDATE_PRODUCT_REQUEST';
export const UPDATE_PRODUCT_SUCCESS = '[Products] UPDATE_PRODUCT_SUCCESS';
export const UPDATE_PRODUCT_FAILURE = '[Products] UPDATE_PRODUCT_FAILURE';

export const DELETE_PRODUCT_REQUEST = '[Products] DELETE_PRODUCT_REQUEST';
export const DELETE_PRODUCT_SUCCESS = '[Products] DELETE_PRODUCT_SUCCESS';
export const DELETE_PRODUCT_FAILURE = '[Products] DELETE_PRODUCT_FAILURE';

export interface Product {
  id: string;
  title: string;
  price: number;
  name: string;
  image: string;
  description: string;
  uploader: {
    name: string;
    id: string;
  };
}
