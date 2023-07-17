/** @format */

import React from "react";
import "../styles/categroys.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Expression from "../components/Expression";

const ExpressionScreen = () => {
  const [expression, setExpressions] = useState([]);

  useEffect(() => {
    const fetchExpressions = async () => {
      const { data } = await axios.get("/api/expression");
      setExpressions(data);
    };

    fetchExpressions();
  }, []);

  return (
    <>
      <section className="section-cat">
        <div className=" flex center">
          <h1 className="fs-900 text-brown letter-spacing">- Expression -</h1>
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
  );
};

export default ExpressionScreen;
