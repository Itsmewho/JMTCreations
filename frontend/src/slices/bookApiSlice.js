/** @format */

import { BOOK_URL } from "../constants.js";
import { apiSlice } from "./apiSlice.js";

export const bookApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBook: builder.query({
      query: () => ({
        url: BOOK_URL,
      }),
      keepUnusedDataFor: 5,
    }),
    getBookDetails: builder.query({
      query: (bookId) => ({
        url: `${BOOK_URL}/${bookId}`,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetBookQuery, useGetBookDetailsQuery } = bookApiSlice;
