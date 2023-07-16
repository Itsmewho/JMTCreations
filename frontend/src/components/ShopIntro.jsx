/** @format */

import React from "react";
import { Link } from "react-router-dom";
import "../styles/Shopintro.css";
import Beauty from "../assets/beautiful.webp";
import glasGirl from "../assets/glasses.webp";
import redlady from "../assets/RedBlueLady.webp";
import AmericanGirl from "../assets/AmericaGirl.webp";
import Tilt from "react-parallax-tilt";

const ShopIntro = () => {
  return (
    <section className="section">
      <div className="flex shop-intro">
        <div className="leftside-shop">
          <div className="shopblob"></div>
          <div className="shop-intro-grid">
            <Tilt tiltReverse={true}>
              <div className="grid-image">
                <img
                  className="shop-images box-shadow"
                  src={AmericanGirl}
                  alt="American girl"
                />
              </div>
            </Tilt>
            <Tilt tiltReverse={true}>
              <div className="grid-image">
                <img
                  className="shop-images box-shadow"
                  src={glasGirl}
                  alt="girl with glasses"
                />
              </div>
            </Tilt>
            <Tilt tiltReverse={true}>
              <div className="grid-image">
                <img
                  className="shop-images box-shadow"
                  src={redlady}
                  alt="a woman in red"
                />
              </div>
            </Tilt>
            <Tilt tiltReverse={true}>
              <div className="grid-image">
                <img
                  className="shop-images box-shadow"
                  src={Beauty}
                  alt="a girl standing in a city"
                />
              </div>
            </Tilt>
          </div>
        </div>
        <div className="rightside-shop">
          <h4 className=" text-brown fs-800">Quality prints</h4>
          <div className="flex">
            <div className="penstripe-2"></div>
            <div className="shop-text">
              <h5 className=" fs-600">Embrace the beauty</h5>
              <p className=" fs-400 paragraph">
                Discover a world of vibrant and captivating digital prints that
                will transform your space into a visual masterpiece. With our
                wide range of designs and high-quality prints, you'll find the
                perfect artwork to express your unique style.
              </p>
              <Link to="/Shop">
                <button className="main-button  uppercase letter-spacing shake">
                  Catagories
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopIntro;
