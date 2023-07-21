/** @format */

import { FULLBODY_URL } from "../constants.js";
import { apiSlice } from "./apiSlice.js";

export const fullbodyApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAbstract: builder.query({
      query: () => ({
        url: FULLBODY_URL,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetFullbodyQuery } = fullbodyApiSlice;
