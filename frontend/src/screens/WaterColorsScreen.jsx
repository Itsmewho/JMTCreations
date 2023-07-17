/** @format */

import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import WaterColor from "../components/WaterColor";

const WaterColorScreen = () => {
  const [watercolors, setWatercolors] = useState([]);

  useEffect(() => {
    const fetchWatercolors = async () => {
      const { data } = await axios.get("/api/watercolors");
      setWatercolors(data);
    };

    fetchWatercolors();
  }, []);

  return (
    <>
      <section className="section-cat">
        <div className=" flex center">
          <h1 className="fs-900 text-brown letter-spacing">- watercolors -</h1>
        </div>
        <div className="grid-container">
          <div className="category-grid">
            {watercolors.map((watercolors) => (
              <div key={watercolors._id} className="grid-block box-shadow">
                <WaterColor watercolors={watercolors}></WaterColor>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WaterColorScreen;
