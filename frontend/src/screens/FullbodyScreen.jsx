/** @format */

import React from "react";
import "../styles/categroys.css";
import fullbody from "../fullbody";
import Fullbody from "../components/Fullbody";

const FullbodyScreen = () => {
  return (
    <>
      <section className="section-cat">
        <div className=" flex center">
          <h1 className="fs-900 text-brown letter-spacing">- Fullbody -</h1>
        </div>
        <div className="grid-container">
          <div className="category-grid">
            {fullbody.map((fullbody) => (
              <div key={fullbody._id} className="grid-block box-shadow">
                <Fullbody fullbody={fullbody}></Fullbody>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
};

export default FullbodyScreen;
