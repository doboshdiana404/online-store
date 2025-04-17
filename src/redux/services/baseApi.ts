import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { RootState } from '../store';

// const baseURLApi = import.meta.env.VITE_API_BASE_URL;
export const baseURLApi = 'http://craft-sweets.runasp.net/';
const baseQuery = fetchBaseQuery({
  baseUrl: baseURLApi,

  // credentials: 'include', //cookie
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).user.token;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: baseQuery,
  tagTypes: ['Category', 'Product', 'Review'],
  endpoints: () => ({}),
});
