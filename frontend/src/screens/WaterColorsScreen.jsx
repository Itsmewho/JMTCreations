/** @format */

import React from "react";
import "../styles/categroys.css";
import WaterColor from "../components/WaterColor";
import { useGetWatercolorsQuery } from "../slices/watercolorsApiSlice";

const WaterColorScreen = () => {
  const { data: watercolors, isLoading, error } = useGetWatercolorsQuery();

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
                - watercolors -
              </h1>
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
      )}
    </>
  );
};

export default WaterColorScreen;
