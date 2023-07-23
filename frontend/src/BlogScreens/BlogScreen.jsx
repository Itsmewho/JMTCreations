/** @format */

import React from "react";
import "../styles/bloglayout.css";
import { useGetBlogQuery } from "../slices/blogApiSlice";
import BlogShorts from "../components/BlogShorts";
import { Helmet } from "react-helmet-async";

const BlogScreen = () => {
  const { data: blog, isLoading, error } = useGetBlogQuery();
  return (
    <>
      {isLoading ? (
        <h2>Loading,...</h2>
      ) : error ? (
        <div> {error?.data?.message || error.error}</div>
      ) : (
        <>
          <Helmet>
            <title>JMT-Creations | Blog</title>
            <meta
              name="description"
              content="Dive into the realm of digital art through our blog. Explore insightful articles and inspiration, unraveling the boundless creativity of the digital medium"
            />
            <link rel="canonical" href="/Blog" />
            <link rel="shortcut icon" href="Favicon.svg" type="icon.svg" />
          </Helmet>
          <section className="section-blog">
            <div className="blog-container">
              <div className="blog-grid-container">
                <div className="blog-grid">
                  {blog.map((blog) => (
                    <div key={blog.id} className="blog-grid-card box-shadow">
                      <BlogShorts blog={blog}></BlogShorts>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default BlogScreen;
