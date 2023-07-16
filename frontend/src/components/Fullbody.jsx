/** @format */

import React from "react";
import "../styles/categroys.css";
import { Link } from "react-router-dom";

const Fullbody = ({ fullbody }) => {
  return (
    <div>
      <Link to={`/fullbody/${fullbody._id}`} className="ff-serif fs-900">
        Clicke here
      </Link>
      <img src={fullbody.image}></img>
    </div>
  );
};

export default Fullbody;
