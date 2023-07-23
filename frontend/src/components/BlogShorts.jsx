/** @format */

import React from "react";
import "../styles/bloglayout.css";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";

const BlogShorts = ({ blog }) => {
  return (
    <Link to={`/blog/blogpost/${blog._id}`}>
      <div className="blog-cart">
        <div className="blog-card-image-container">
          <img
            loading="lazy"
            className="blog-cart-image"
            src={blog.image}
            alt={blog.alt}
          />
          <Link to={blog.id}>
            <div className="blog-link">
              <button className="text-green blog-button shake">Go To Post</button>
            </div>
          </Link>
        </div>
        <div className="blogcart-text">
          <h2 className="blog-cart-title fs-400 text-brown letter-spacing">
            {blog.name}
          </h2>
          <h3 className="text-green letter-spacing">{blog.subheader}</h3>
          <p className="text-white blog-paragraph">{blog.shorttext}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogShorts;
