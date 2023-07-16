import React from 'react'
import "../styles/categroys.css";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";

const Random = ( { random }) => {
  return (
    <Link to={`/product/random/${random._id}`}>
    <div className="cart-container">
      <h1 className="cart-title fs-400 text-brown letter-spacing">
        {random.name}
      </h1>
      <div className="cart-content">
        <Tilt titlReverse={true}>
          <img
            className="cart-image"
            src={random.image}
            alt={random.alt}
          />
        </Tilt>
        <div className="cart-text">
          <h2 className="fs-400 text-green ">Description:</h2>
          <p className="cart-discription cart-desciption text-white">
            {random.description}
          </p>
          <h3 className=" fs-400 text-green cart-style">Slogan:</h3>
          <p className="cart-slogan cart-slogan text-white">
            {random.slogan}
          </p>
        </div>
        <div className="cart-cta">
          <button className="main-button bold shake">&#62;</button>
        </div>
      </div>
    </div>
  </Link>
  )
}

export default Random