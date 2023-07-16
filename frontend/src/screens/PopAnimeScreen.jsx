/** @format */

import React from "react";
import "../styles/categroys.css";
import popanime from "../popanime";
import PopAnime from "../components/PopAnime.jsx";

const PopAnimeScreen = () => {
  return (
    <>
      <section className="section-cat">
        <div className=" flex center">
          <h1 className="fs-900 text-brown letter-spacing">- Pop Anime -</h1>
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
  );
};

export default PopAnimeScreen;
