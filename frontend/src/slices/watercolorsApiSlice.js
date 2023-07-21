/** @format */

import { WATERCOLORS_URL } from "../constants.js";
import { apiSlice } from "./apiSlice.js";

export const watercolorsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getWatercolors: builder.query({
      query: () => ({
        url: WATERCOLORS_URL,
      }),
      keepUnusedDataFor: 5,
    }),
    getWatercolorsDetails: builder.query({
      query: (watercolorsId) => ({
        url: `${WATERCOLORS_URL}/${watercolorsId}`,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetWatercolorsQuery, useGetWatercolorsDetailsQuery } =
  watercolorsApiSlice;
