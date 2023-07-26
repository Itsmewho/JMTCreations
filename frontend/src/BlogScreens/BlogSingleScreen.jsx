/** @format */

import React from "react";
import "../styles/bloglayout.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";

import { useGetBlogDetailsQuery } from "../slices/blogApiSlice.js";
import { Helmet } from "react-helmet-async";

const BlogSingleScreen = () => {
  const { id: blogId } = useParams();
  const { data: blog, isLoading, error } = useGetBlogDetailsQuery(blogId);
  return (
    <>
      {isLoading ? (
        <h2 className="layout-shift">Loading,...</h2>
      ) : error ? (
        <div> {error?.data?.message || error.error}</div>
      ) : (
        <>
          <Helmet>
            <title>JMT-Creations | {blog.name}</title>
            <meta name="description" content={blog.metaDescription} />
            <link rel="canonical" href={`/blog/blogpost/${blog._id}`} />
            <link rel="shortcut icon" href="./Favicon.svg" type="icon.svg" />
          </Helmet>

          <section className="section-single-blog">
            <div className="blog-top box-shadow">
              <div className="blog-flex">
                <div className="blog-left">
                  <h1 className="fs-900 letter-spacing text-brown">
                    {blog.name}
                  </h1>
                  <h2 className="fs-800 letter-spacing text-green">
                    {blog.subheader}
                  </h2>
                </div>
                <div>
                  <Tilt tiltReverse={true}>
                    <picture className="blog-single-image box-shadow">
                      <source
                        srcSet={blog.imagelong}
                        media="(min-width: 1250px"
                      />
                      <img
                        className="blog-single-image"
                        src={blog.image}
                        alt={blog.alt}
                      />
                    </picture>
                  </Tilt>
                </div>
              </div>
              <div className="main-content">
                <div className="blog-cta">
                  <h3 className="Introduction fs-400 uppercase letter-spacing">
                    Introduction:
                  </h3>
                  <Link to="/Shop">
                    <button className="main-button shake">Go To Shop</button>
                  </Link>
                </div>
                <div className="main-text">
                  <p className="fs-400">{blog.shorttext}</p>
                  <div className="main-title">
                    <h4 className="fs-400 text-green uppercase letter-spacing blog-main-intro">
                      {blog.name}:
                    </h4>
                  </div>
                </div>
                <div className="main-section">
                  <h5 className="fs-400 text-white">{blog.maincontent}</h5>
                </div>
                <div className="cta-btn">
                  <Link to="/Shop">
                    <button className="main-button shake">Go To Shop</button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default BlogSingleScreen;
