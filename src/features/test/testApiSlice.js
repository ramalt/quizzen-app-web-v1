import { apiSlice } from "../../app/api/apiSlice";

export const testApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    test: builder.query({
      query: () => "/test",
      keepUnusedDataFor: 5, // cache data 5 dakika
    }),
  }),
});

export const { useTestQuery } = testApiSlice;
