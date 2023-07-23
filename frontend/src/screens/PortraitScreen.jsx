/** @format */
import React from "react";
import "../styles/categroys.css";
import Portrait from "../components/Portrait";
import { useGetAbstractQuery } from "../slices/abstractApiSlice";
import { Helmet } from "react-helmet-async";

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
          <Helmet>
            <title>JMT-Creations | Portrait</title>
            <meta
              name="description"
              content="Abstract portraits through mesmerizing digital prints. Embrace the beauty of unconventional artistry, capturing emotions and expressions in captivating and imaginative ways."
            />
            <link rel="canonical" href="/Portrait" />
            <link rel="shortcut icon" href="Favicon.svg" type="icon.svg" />
          </Helmet>
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
