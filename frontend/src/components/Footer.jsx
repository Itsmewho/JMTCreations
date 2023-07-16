/** @format */

import React from "react";
import "../styles/footer.css";

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
              Li
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
    </footer>
  );
};

export default Footer;
