/** @format */

import { BLOG_URL } from "../constants.js";
import { apiSlice } from "./apiSlice.js";

export const blogApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBlog: builder.query({
      query: () => ({
        url: BLOG_URL,
      }),
      keepUnusedDataFor: 5,
    }),
    getBlogDetails: builder.query({
      query: (blogId) => ({
        url: `${BLOG_URL}/${blogId}`,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetBloguery, useGetBlogDetailsQuery } = blogApiSlice;
