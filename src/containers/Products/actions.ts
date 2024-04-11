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
  WATCH_PRODUCTS_COLLECTION,
} from './types';

export const watchProductsCollection = () => ({
  type: WATCH_PRODUCTS_COLLECTION,
});

export const setCollectionData = (data: any) => ({
  type: 'SET_COLLECTION_DATA',
  payload: data,
});

export const addProductRequest = (data: any) => ({
  type: ADD_PRODUCT_REQUEST,
  payload: data,
});

export const addProductSuccess = (data: any) => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: data,
});

export const addProductFailure = (error: any) => ({
  type: ADD_PRODUCT_FAILURE,
  payload: error,
});

export const updateProductRequest = (data: any) => ({
  type: UPDATE_PRODUCT_REQUEST,
  payload: data,
});

export const updateProductSuccess = (data: any) => ({
  type: UPDATE_PRODUCT_SUCCESS,
  payload: data,
});

export const updateProductFailure = (error: any) => ({
  type: UPDATE_PRODUCT_FAILURE,
  payload: error,
});

export const deleteProductRequest = (data: any) => ({
  type: DELETE_PRODUCT_REQUEST,
  payload: data,
});

export const deleteProductSuccess = (data: any) => ({
  type: DELETE_PRODUCT_SUCCESS,
  payload: data,
});

export const deleteProductFailure = (error: any) => ({
  type: DELETE_PRODUCT_FAILURE,
  payload: error,
});
