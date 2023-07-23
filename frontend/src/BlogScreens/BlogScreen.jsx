/** @format */

import React from "react";
import { Helmet } from "react-helmet-async";

const BlogScreen = () => {
  return (
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
      <div>BlogScreen</div>
    </>
  );
};

export default BlogScreen;
