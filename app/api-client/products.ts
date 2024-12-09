import {apiClient, handleApiError} from './client';
import {ApiOptions, ApiPayload} from './types';
import {Product, ProductFormData, ProductResponse, ProductsListResponse} from '~/types/products';

export type apiProductsListPayload = ApiOptions;
export type apiProductsListResponse = ProductsListResponse;

export const apiProductsList = async ({options}: apiProductsListPayload = {}) => {
  try {
    return await apiClient.get('v1/products/', options).json<apiProductsListResponse>();
  } catch (err) {
    return handleApiError(err);
  }
};

export type apiProductsGetPayload = {id: string} & ApiOptions;
export type apiProductsGetResponse = ProductResponse;

export const apiProductsGet = async ({id, options}: apiProductsGetPayload) => {
  try {
    return await apiClient.get('v1/products/' + id, options).json<apiProductsGetResponse>();
  } catch (err) {
    return handleApiError(err);
  }
};

export type apiProductsCreatePayload = ApiPayload<ProductFormData>;
export type apiProductsCreateResponse = ProductResponse;

export const apiProductsCreate = async ({payload, options}: apiProductsCreatePayload) => {
  try {
    return await apiClient
      .post<apiProductsCreateResponse>('v1/products/', {json: payload, ...options})
      .json();
  } catch (err) {
    return handleApiError(err);
  }
};

export type apiProductsUpdatePayload = {id: string} & ApiPayload<Partial<ProductFormData>>;
export type apiProductsUpdateResponse = ProductResponse;

export const apiProductsUpdate = async ({id, payload, options}: apiProductsUpdatePayload) => {
  try {
    return await apiClient
      .patch<apiProductsUpdateResponse>('v1/products/' + id, {json: payload, ...options})
      .json();
  } catch (err) {
    return handleApiError(err);
  }
};

export type apiProductsDeletePayload = apiProductsGetPayload;
export type apiProductsDeleteResponse = ProductResponse;

export const apiProductsDelete = async ({id, options}: apiProductsDeletePayload) => {
  try {
    return await apiClient.delete<apiProductsDeleteResponse>('v1/products/' + id, options).json();
  } catch (err) {
    return handleApiError(err);
  }
};
