/** @format */
import React from "react";
import "../styles/categroys.css";
import Portrait from "../components/Portrait";
import { useGetAbstractQuery } from "../slices/abstractApiSlice";

const PortraitScreen = () => {
  const { data: abstract, isLoading, error } = useGetAbstractQuery();

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
                - Portraits -
              </h1>
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
      )}
    </>
  );
};

export default PortraitScreen;
