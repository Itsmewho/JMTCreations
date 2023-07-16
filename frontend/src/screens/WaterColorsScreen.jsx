/** @format */

import React from "react";
import watercolors from "../watercolors";
import WaterColor from "../components/WaterColor";

const WaterColorScreen = () => {
  return (
    <>
      <section className="section-cat">
        <div className=" flex center">
          <h1 className="fs-900 text-brown letter-spacing">- watercolors -</h1>
        </div>
        <div className="grid-container">
          <div className="category-grid">
            {watercolors.map((watercolors) => (
              <div key={watercolors._id} className="grid-block box-shadow">
                <WaterColor watercolors={watercolors}></WaterColor>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WaterColorScreen;
