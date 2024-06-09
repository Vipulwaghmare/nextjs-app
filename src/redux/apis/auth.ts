import apiSlice, { apiQuery } from "../apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: apiQuery.post('/api/v1/auth/login'),
      transformErrorResponse: ({ data }) => data || 'Something went wrong'
    }),
    register: build.mutation({
      query: apiQuery.post('/api/v1/auth/register'),
      transformErrorResponse: ({ data }) => data || 'Something went wrong'
    }),
  }),
})

export const {
  useLoginMutation,
  useRegisterMutation,
} = authApiSlice;
