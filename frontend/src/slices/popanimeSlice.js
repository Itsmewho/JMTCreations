import { POPANIME_URL } from "../constants.js";
import { apiSlice } from "./apiSlice.js";

export const popanimeApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPopanime: builder.query({
      query: () => ({
        url: POPANIME_URL,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetPopanimeQuery } = popanimeApiSlice;
