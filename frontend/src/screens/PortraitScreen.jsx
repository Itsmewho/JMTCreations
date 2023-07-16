/** @format */

import React from "react";
import abstract from "../abstract";
import Portrait from "../components/Portrait";

const PortraitScreen = () => {
  return (
    <>
      <section className="section-cat">
        <div className=" flex center">
          <h1 className="fs-900 text-brown letter-spacing">- Portraits -</h1>
        </div>
        <div className="grid-container">
          <div className="category-grid">
            {abstract.map((abstract) => (
              <div key={abstract._id} className="grid-block box-shadow">
                <Portrait abstract={abstract}></Portrait>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PortraitScreen;
