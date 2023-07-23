/** @format */

import React from "react";
import "../styles/bloglayout.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useGetBlogDetailsQuery } from "../slices/blogApiSlice.js";
import { Helmet } from "react-helmet-async";

const BlogSingleScreen = () => {
  const { id: blogId } = useParams();
  const { data: blog, isLoading, error } = useGetBlogDetailsQuery(blogId);
  return (
    <>
      {isLoading ? (
        <h2>Loading,...</h2>
      ) : error ? (
        <div> {error?.data?.message || error.error}</div>
      ) : (
        <>
          <Helmet>
            <title>JMT-Creations | {blog.name}</title>
            <meta name="description" content={blog.metaDescription} />
            <link rel="canonical" href={`/blogpost/${blog._id}`} />
            <link rel="shortcut icon" href="Favicon.svg" type="icon.svg" />
          </Helmet>

          <section>
            <div>boejah</div>
          </section>
        </>
      )}
    </>
  );
};

export default BlogSingleScreen;
