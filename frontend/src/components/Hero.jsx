/** @format */

import React from "react";
import { Link } from "react-router-dom";
import JMT from "../assets/JMT-Creations.webp";
import JMTMobile from "../assets/JMT-Creations-mobile.webp";
import { TypeAnimation } from "react-type-animation";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section>
      <div className="spacer"></div>
      <div className="hero-grid">
        <div className="hero-column">
          <picture className="hero-image">
            <source srcSet={JMT} media="(min-width: 1250px" />
            <img
              src={JMTMobile}
              alt="JMT-Creations standing by a waterfall in the mountains"
            />
          </picture>
        </div>
        <div className="hero-column hero-title">
          <TypeAnimation
            className=" fs-900 text-brown"
            sequence={["JMT-Creations", 1800, ""]}
            wrapper="span"
            speed={220}
            repeat={Infinity}
          />
          <h2 className=" fs-600 hero-subheading">
            Jack off all trades, Master of none!
          </h2>
          <p className="hero-paragraph  fs-400">
            As the famous chess player Paul Morphy once said: "The ability to
            play chess is the sign of a gentleman. The ability to play chess
            well is the sign of a wasted life." And so I want to explore the
            world and all it has to offer!
          </p>
          <div className="button-hero flex">
            <Link to="/Shop">
              <button className="main-button bg-green  letter-spacing uppercase shake">
                Shop
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="spacer"></div>
    </section>
  );
};

export default Hero;
