/** @format */

import React from "react";
import "../styles/categroys.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Fullbody from "../components/Fullbody";

const FullbodyScreen = () => {
  const [fullbody, setFullbody] = useState([]);

  useEffect(() => {
    const fetchFullbody = async () => {
      const { data } = await axios.get("/api/fullbody");
      setFullbody(data);
    };

    fetchFullbody();
  }, []);

  return (
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
  );
};

export default FullbodyScreen;
