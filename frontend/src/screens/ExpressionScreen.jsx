/** @format */

import React from "react";
import "../styles/categroys.css";
import { useGetExpressionQuery } from "../slices/expressionApiSlice";
import Expression from "../components/Expression";

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
