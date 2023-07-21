/** @format */

import React from "react";
import "../styles/categroys.css";
import Random from "../components/Random";
import { useGetRandomQuery } from "../slices/randomApiSlice";

const RandomScreen = () => {
  const { data: random, isLoading, error } = useGetRandomQuery();

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
