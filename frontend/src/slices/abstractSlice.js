/** @format */

import { ABSTRACT_URL } from "../constants.js";
import { apiSlice } from "./apiSlice.js";

export const abstractApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAbstract: builder.query({
      query: () => ({
        url: ABSTRACT_URL,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetAbstractQuery } = abstractApiSlice;
