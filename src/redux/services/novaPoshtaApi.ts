import {
  createApi,
  fetchBaseQuery,
  FetchArgs,
} from '@reduxjs/toolkit/query/react';

const API_URL = 'https://api.novaposhta.ua/v2.0/json/';
const API_KEY = import.meta.env.VITE_NOVA_POSHTA_API_KEY;

type NPItem = {
  Ref: string;
  Description: string;
};

type NovaPoshtaResponse<T> = {
  success: boolean;
  data: T;
};

export const novaPoshtaApi = createApi({
  reducerPath: 'novaPoshtaApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: (build) => ({
    getAreas: build.query<NPItem[], undefined>({
      query: (): FetchArgs => ({
        url: '/',
        method: 'POST',
        body: {
          apiKey: API_KEY,
          modelName: 'Address',
          calledMethod: 'getAreas',
        },
      }),
      transformResponse: (response: NovaPoshtaResponse<NPItem[]>) =>
        response.data,
    }),

    getCities: build.query<NPItem[], string>({
      query: (areaRef: string): FetchArgs => ({
        url: '/',
        method: 'POST',
        body: {
          apiKey: API_KEY,
          modelName: 'Address',
          calledMethod: 'getCities',
          methodProperties: {
            AreaRef: areaRef,
          },
        },
      }),
      transformResponse: (response: NovaPoshtaResponse<NPItem[]>) =>
        response.data,
    }),

    getWarehouses: build.query<NPItem[], string>({
      query: (cityRef: string): FetchArgs => ({
        url: '/',
        method: 'POST',
        body: {
          apiKey: API_KEY,
          modelName: 'AddressGeneral',
          calledMethod: 'getWarehouses',
          methodProperties: {
            CityRef: cityRef,
          },
        },
      }),
      transformResponse: (response: NovaPoshtaResponse<NPItem[]>) =>
        response.data,
    }),
  }),
});

export const { useGetAreasQuery, useGetCitiesQuery, useGetWarehousesQuery } =
  novaPoshtaApi;
