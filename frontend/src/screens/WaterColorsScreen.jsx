/** @format */

import React from "react";
import "../styles/categroys.css";
import WaterColor from "../components/WaterColor";
import { useGetWatercolorsQuery } from "../slices/watercolorsApiSlice";
import { Helmet } from "react-helmet-async";

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
          <Helmet>
            <title>JMT-Creations | Watercolors</title>
            <meta
              name="description"
              content="Explore the world of digital watercolor prints - a fusion of charm and modern technology. Discover your favorite masterpiece today!"
            />
            <link rel="canonical" href="/Watercolors" />
            <link rel="shortcut icon" href="Favicon.svg" type="icon.svg" />
          </Helmet>
          <link rel="canonical" href="/" />
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
