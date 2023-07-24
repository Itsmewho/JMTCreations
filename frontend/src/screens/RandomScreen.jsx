/** @format */

import React from "react";
import "../styles/categroys.css";
import Random from "../components/Random";
import { useGetRandomQuery } from "../slices/randomApiSlice";
import { Helmet } from "react-helmet-async";

const RandomScreen = () => {
  const { data: random, isLoading, error } = useGetRandomQuery();

  return (
    <>
      {isLoading ? (
        <h2 className="layout-shift">Loading,...</h2>
      ) : error ? (
        <div> {error?.data?.message || error.error}</div>
      ) : (
        <>
          <Helmet>
            <title>JMT-Creations | Random Art</title>
            <meta
              name="description"
              content="Experience a world of creativity with our diverse digital art prints. Discover captivating masterpieces that resonate with your style and add flair to your spaces."
            />
            <link rel="canonical" href="/Random" />
            <link rel="shortcut icon" href="Favicon.svg" type="icon.svg" />
          </Helmet>
          <section className="section-cat">
            <div className=" flex center">
              <h1 className="fs-900 text-brown letter-spacing">- Random -</h1>
            </div>
            <div className="grid-container">
              <div className="category-grid">
                {random.map((random) => (
                  <div key={random._id} className="grid-block box-shadow">
                    <Random random={random}></Random>
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

export default RandomScreen;
