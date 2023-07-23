/** @format */

import React from "react";
import "../styles/bloglayout.css";
import { Link } from "react-router-dom";

const BlogShorts = ({ blog }) => {
  return (
    <Link to={`/blog/blogpost/${blog._id}`}>
      <div className="blog-cart shadow-box">
        <div className="blog-card-image-container">
          <img className="blog-cart-image" src={blog.image} alt={blog.alt} />
          <Link to={blog.id}>
            <div className="blog-link">
              <button className="text-green blog-button shake">
                Go To Post
              </button>
            </div>
          </Link>
        </div>
        <div className="blogcart-text">
          <h2 className="blog-cart-title fs-400 text-brown letter-spacing">
            {blog.name}
          </h2>
          <h3 className="text-green letter-spacing">{blog.subheader}</h3>
          <p className="text-white blog-paragraph">{blog.shorttext}</p>
          <Link to={blog.id}>
            <p className="text-green read-link">continue reading</p>
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default BlogShorts;
