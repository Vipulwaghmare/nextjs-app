import { FetchArgs, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:1000' }),
  // baseQuery: fetchBaseQuery({ baseUrl: process.env.API_URL }),
  endpoints: () => ({}),
})

export const apiQuery = {
  get: (url: string) => (query = ''): string => url + query,
  post: (url: string) => (body: object): FetchArgs => ({
    url, body, method: 'POST'
  })
}

export default apiSlice;
