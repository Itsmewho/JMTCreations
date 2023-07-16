/** @format */

import React from "react";
import "../styles/categroys.css";
import fullbody from "../fullbody";
import Fullbody from "../components/Fullbody";

const FullbodyScreen = () => {
  return (
    <section className="section-cat">
      <h1>Latest</h1>
      <div>
        {fullbody.map((fullbody) => (
          <div key={fullbody._id}>
            <Fullbody fullbody={fullbody}></Fullbody>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FullbodyScreen;
