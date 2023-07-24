/** @format */

import React from "react";
import "../styles/categroys.css";
import { useGetFullbodyQuery } from "../slices/fullbodyApiSlice";
import Fullbody from "../components/Fullbody";
import { Helmet } from "react-helmet-async";

const FullbodyScreen = () => {
  const { data: fullbody, isLoading, error } = useGetFullbodyQuery();

  return (
    <>
      {isLoading ? (
        <h2 className="layout-shift">Loading,...</h2>
      ) : error ? (
        <div> {error?.data?.message || error.error}</div>
      ) : (
        <>
          <Helmet>
            <title>JMT-Creations | Fullbody's</title>
            <meta
              name="description"
              content="The essence of life with our digital prints of full-body portraits. Explore captivating artworks that celebrate the beauty and diversity of the human form."
            />
            <link rel="canonical" href="/Fullbody" />
            <link rel="shortcut icon" href="Favicon.svg" type="icon.svg" />
          </Helmet>
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
