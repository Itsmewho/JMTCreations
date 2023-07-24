/** @format */

import React from "react";
import "../styles/singleproduct.css";
import { useParams } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import Accordion from "../components/Accordion";
import data from "../accordion";
import { useGetRandomDetailsQuery } from "../slices/randomApiSlice.js";
import { Helmet } from "react-helmet-async";

const RandomDetailsScreen = () => {
  const { id: randomId } = useParams();
  const { data: random, isLoading, error } = useGetRandomDetailsQuery(randomId);

  return (
    <>
      {isLoading ? (
        <h2 className="layout-shift">Loading,...</h2>
      ) : error ? (
        <div> {error?.data?.message || error.error}</div>
      ) : (
        <>
          <Helmet>
            <title>JMT-Creations | {random.name}</title>
            <meta name="description" content={random.metaDescription} />
            <link rel="canonical" href={`/product/random/${random._id}`} />
            <link rel="shortcut icon" href="Favicon.svg" type="icon.svg" />
          </Helmet>
          <section className="section-single">
            <div className="flex">
              <div className="center">
                <h1 className="letter-spacing ff-serif fs-900 text-brown">
                  - {random.name} -
                </h1>
              </div>
            </div>
            <div className="product-container box-shadow">
              <div className="top-section flex">
                <div className="image-container box-shadow">
                  <Tilt titlReverse={true}>
                    <picture className="single-image">
                      <source
                        srcSet={random.imagelong}
                        media="(min-width: 1250px"
                      />
                      <img
                        className="single-image"
                        src={random.image}
                        alt={random.alt}
                      />
                    </picture>
                  </Tilt>
                </div>
                <div className="top-content">
                  <p className="fs-400">{random.alt}</p>
                  <div className="button-container-top">
                    <button className="main-button ff-serif uppercase shake">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
              <div className="mid-content">
                <div className="discription">
                  <p className="fs-400 text-green">Description:</p>
                  <p>{random.description}</p>
                </div>
                <div className="lower-content">
                  <div className="use-grid">
                    <p className="fs-400 text-green">How To Use:</p>
                    <div className="grid">
                      <p>1. Download it</p>
                      <p>2. Print it</p>
                      <p>3. Frame it</p>
                      <div className="explane flex">
                        <div className="grid short-text-single">
                          <p className="fs-400 text-green">Quality:</p>
                          <p>Image size: 8500px</p>
                          <p>Image PPI: 300ppi</p>
                        </div>
                        <div className="grid short-text-single">
                          <p className="fs-400 text-green">Sizes:</p>
                          <p>Use up to 24-32inch</p>
                          <p>Or 32-32inch</p>
                        </div>
                        <div className="grid short-text-single">
                          <p className="fs-400 text-green">Inculde:</p>
                          <p>1:1 ratio</p>
                          <p>5:7 ratio</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion">
                      <div className="accordion-title-center">
                        <p className="ff-serif fs-800 text-brown">F A Q</p>
                      </div>
                      {data.map((data) => (
                        <div key={data._id}>
                          <Accordion data={data} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};
export default RandomDetailsScreen;
