import React from "react";
import "../styles/categroys.css";
import expression from "../expressions";
import Expression from "../components/Expression";

const ExpressionScreen = () => {
  return (
    <>
    <section className="section-cat">
      <div className=" flex center">
        <h1 className="fs-900 text-brown letter-spacing">- expression -</h1>
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
  )
}

export default ExpressionScreen