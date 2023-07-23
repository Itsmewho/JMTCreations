/** @format */

import React from "react";
import "../styles/categroys.css";
import { useGetExpressionQuery } from "../slices/expressionApiSlice";
import Expression from "../components/Expression";
import { Helmet } from "react-helmet-async";

const ExpressionScreen = () => {
  const { data: expression, isLoading, error } = useGetExpressionQuery();
  return (
    <>
      {isLoading ? (
        <h2>Loading,...</h2>
      ) : error ? (
        <div> {error?.data?.message || error.error}</div>
      ) : (
        <>
          <Helmet>
            <title>JMT-Creations | Expression</title>
            <meta
              name="description"
              content="Experience the emotive power of expression art through our stunning digital prints. Discover visuals that evoke emotions and add a unique touch to your space."
            />
            <link rel="canonical" href="/Expression" />
            <link rel="shortcut icon" href="Favicon.svg" type="icon.svg" />
          </Helmet>
          <section className="section-cat">
            <div className=" flex center">
              <h1 className="fs-900 text-brown letter-spacing">
                - Expression -
              </h1>
            </div>
            <div className="grid-container">
              <div className="category-grid">
                {expression.map((expression) => (
                  <div key={expression._id} className="grid-block box-shadow">
                    <Expression expression={expression}></Expression>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default ExpressionScreen;
