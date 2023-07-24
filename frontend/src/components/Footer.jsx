/** @format */

import React from "react";
import "../styles/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div>
          <p className=" fs-400 text-white">
            &#169;{currentYear} JMT-Creations
          </p>
          <p className="ff-sans fs-400 text-white">Nothing is impossible</p>
        </div>
        <div>
          <p className=" fs-400 text-white">SocialMedia:</p>
          <div className="flex">
            <a
              className="social ff-sans fs-400 text-white hover-text"
              href="https://www.google.com/">
              Pi
            </a>
            <a
              className="social ff-sans fs-400 text-white hover-text"
              href="https://www.google.com/">
              Tw
            </a>
            <a
              className="social ff-sans fs-400 text-white hover-text"
              href="https://www.google.com/">
              In
            </a>
          </div>
        </div>
      </div>
      <div className="service-container">
        <div className="footer-center">
          <Link to={`/privacy`} className="ff-sans fs-400 text-white hover-text padding">
            Privacy
          </Link>
          <Link to={`/service`} className="ff-sans fs-400 text-white hover-text padding">
            Service
          </Link>
          <Link to={`/contact`} className="ff-sans fs-400 text-white hover-text padding">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
