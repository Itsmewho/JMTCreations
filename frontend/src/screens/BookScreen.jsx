/** @format */

import React from "react";
import { Helmet } from "react-helmet-async";

const BookScreen = () => {
  return (
    <>
      <Helmet>
        <title>JMT-Creations | Book</title>
        <meta
          name="description"
          content="Embark on a riveting journey through the birth of AI. Unravel the fascinating evolution, from its origins to its transformative impact on our world."
        />
        <link rel="canonical" href="/Book" />
        <link rel="shortcut icon" href="Favicon.svg" type="icon.svg" />
      </Helmet>
      <div>BookScreen</div>
    </>
  );
};

export default BookScreen;
