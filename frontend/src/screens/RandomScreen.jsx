/** @format */

import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/categroys.css";
import Random from "../components/Random";

const RandomScreen = () => {
  const [random, setRandom] = useState([]);

  useEffect(() => {
    const fetchRandom = async () => {
      const { data } = await axios.get("/api/random");
      setRandom(data);
    };

    fetchRandom();
  }, []);

  return (
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
  );
};

export default RandomScreen;
