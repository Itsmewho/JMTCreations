/** @format */

import React from "react";
import "../styles/singleproduct.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import abstract from "../abstract.js";

const PortraitDetailScreen = () => {
  const { id: productId } = useParams();
  const abstracts = abstract.find((p) => p._id === productId);

  return (
    <section className="section-single">
      <div className="flex single-container">
        <div className="button-container">
          <button className="main-button ff-serif uppercase">Go Back</button>
        </div>
        <div>
          <h1 className="letter-spacing ff-serif fs-900">{abstracts.name}</h1>
        </div>
        <div className="button-container">
          <button className="main-button ff-serif uppercase">
            Add To Cart
          </button>
        </div>
      </div>
      <div className="product-container">
        <div className="top-section flex">
          <div className="image-container">
            <img src={abstracts.image} alt={abstracts.alt} />
          </div>
          <div className="top-content">
            <h2>{abstracts.alt}</h2>
            <div className="button-container-top">
              <button className="main-button ff-serif uppercase">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortraitDetailScreen;
