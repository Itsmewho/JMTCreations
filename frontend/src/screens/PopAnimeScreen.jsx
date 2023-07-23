/** @format */

import React from "react";
import "../styles/categroys.css";
import PopAnime from "../components/PopAnime.jsx";
import { useGetPopanimeQuery } from "../slices/popanimeApiSlice";
import { Helmet } from "react-helmet-async";

const PopAnimeScreen = () => {
  const { data: popanime, isLoading, error } = useGetPopanimeQuery();

  return (
    <>
      {isLoading ? (
        <h2>Loading,...</h2>
      ) : error ? (
        <div> {error?.data?.message || error.error}</div>
      ) : (
        <>
          <Helmet>
            <title>JMT-Creations | PopAnime</title>
            <meta
              name="description"
              content="Immerse yourself in the vibrant world of Pop anime art with our captivating digital prints. Explore unique and colorful artworks inspired by beloved anime characters and culture."
            />
            <link rel="canonical" href="/PopAnime" />
            <link rel="shortcut icon" href="Favicon.svg" type="icon.svg" />
          </Helmet>
          <section className="section-cat">
            <div className=" flex center">
              <h1 className="fs-900 text-brown letter-spacing">
                - Pop Anime -
              </h1>
            </div>
            <div className="grid-container">
              <div className="category-grid">
                {popanime.map((popanime) => (
                  <div key={popanime._id} className="grid-block box-shadow">
                    <PopAnime popanime={popanime}></PopAnime>
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

export default PopAnimeScreen;
