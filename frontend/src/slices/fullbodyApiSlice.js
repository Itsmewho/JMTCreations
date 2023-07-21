/** @format */

import { FULLBODY_URL } from "../constants.js";
import { apiSlice } from "./apiSlice.js";

export const fullbodyApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFullbody: builder.query({
      query: () => ({
        url: FULLBODY_URL,
      }),
      keepUnusedDataFor: 5,
    }),
    getFullbodyDetails: builder.query({
      query: (fullbodyId) => ({
        url: `${FULLBODY_URL}/${fullbodyId}`,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetFullbodyQuery, useGetFullbodyDetailsQuery } =
  fullbodyApiSlice;
