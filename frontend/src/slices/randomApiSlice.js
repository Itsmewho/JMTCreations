/** @format */

import { RANDOM_URL } from "../constants.js";
import { apiSlice } from "./apiSlice.js";

export const randomApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRandom: builder.query({
      query: () => ({
        url: RANDOM_URL,
      }),
      keepUnusedDataFor: 5,
    }),
    getRandomDetails: builder.query({
      query: (randomId) => ({
        url: `${RANDOM_URL}/${randomId}`,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetRandomQuery, useGetRandomDetailsQuery } = randomApiSlice;
