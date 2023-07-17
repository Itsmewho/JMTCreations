/** @format */

import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/categroys.css";
import PopAnime from "../components/PopAnime.jsx";

const PopAnimeScreen = () => {
  const [popanime, setPopanime] = useState([]);

  useEffect(() => {
    const fetchPopanime = async () => {
      const { data } = await axios.get("/api/popanime");
      setPopanime(data);
    };

    fetchPopanime();
  }, []);

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
