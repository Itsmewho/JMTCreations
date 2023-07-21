/** @format */

import React from "react";
import "../styles/categroys.css";
import { useGetFullbodyQuery } from "../slices/fullbodyApiSlice";
import Fullbody from "../components/Fullbody";

const FullbodyScreen = () => {
  const { data: fullbody, isLoading, error } = useGetFullbodyQuery();

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
      )}
    </>
  );
};

export default FullbodyScreen;
