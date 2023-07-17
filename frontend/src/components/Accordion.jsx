/** @format */

import React from "react";
import "../styles/accordion.css";
import { useState } from "react";

const Accordion = ({ data }) => {
  const [show, setShow] = useState(false);
  const handleOpen = () => {
    setShow(!show); // Toggle accordion
  };

  return (
    <div className="accordian">
      <div className="accordian-header" onClick={handleOpen}>
        <div>
          <p className="accordion-title text-green">{data.question}</p>
        </div>
        <div className="sign bold">{show ? "-" : "+"}</div>
      </div>
      {show && (
        <div className="accordian-body">
          <div className="flex image-show">
            <img className="image-size" src={data.img} alt={data.alt} />
            <img className="image-size" src={data.img1} alt={data.alt} />
            <img className="image-size" src={data.img2} alt={data.alt} />
          </div>
          <p>{data.answers}</p>
          <p>{data.answers2}</p>
          <p>{data.answers3}</p>
          <p>{data.answers4}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
