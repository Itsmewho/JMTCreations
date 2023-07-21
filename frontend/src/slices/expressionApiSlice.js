/** @format */

import { EXPRESSION_URL } from "../constants.js";
import { apiSlice } from "./apiSlice.js";

export const expressionApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getExpression: builder.query({
      query: () => ({
        url: EXPRESSION_URL,
      }),
      keepUnusedDataFor: 5,
    }),
    getExpressionDetails: builder.query({
      query: (expressionId) => ({
        url: `${EXPRESSION_URL}/${expressionId}`,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetExpressionQuery, useGetExpressionDetailsQuery } =
  expressionApiSlice;
