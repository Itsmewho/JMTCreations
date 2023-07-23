/** @format */

import React from "react";
import Hero from "../components/Hero.jsx";
import Book from "../components/Book.jsx";
import ShopIntro from "../components/ShopIntro.jsx";
import BlogIntro from "../components/BlogIntro.jsx";
import { Helmet } from "react-helmet-async";

const HomeScreen = () => {
  return (
    <>
      <Helmet>
        <title>JMT-Creations</title>
        <meta
          name="description"
          content="JMT-Creations Personal MERN-project for selling digital products"
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <Hero />
      <Book />
      <ShopIntro />
      <BlogIntro />
    </>
  );
};

export default HomeScreen;
