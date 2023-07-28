/** @format */

import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Twirl as Hamburger } from "hamburger-react";
import cartBlack from "../assets/shopping.svg";
import carthover from "../assets/shoppingHover.svg";
import "../styles/navigation.css";

const Header = () => {
  const [isActive, setActive] = useState(true);
  const [over, setOver] = useState(false);
  const navToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      <header className="primary-header flex">
        <div className="shake">
          <Link to="/">
            <div
              className=" fs-mobile text-brown border-round"
              alt="Logo of JMT-Creations">
              J M T
            </div>
          </Link>
        </div>
        <button className="mobile-nav-toggle" onClick={navToggle}>
          <span className="sr-only">
            <Hamburger size={35} rounded label="Show menu" color="white" />
          </span>
        </button>
        <nav>
          <ul
            className={isActive ? "navigation" : "navigation-open"}
            onClick={navToggle}>
            <Link to="/Blog">
              <li>
                <button className="text-white fs-mobile">Blog</button>
              </li>
            </Link>
            <li>
              <Link to="/Shop">
                <button className=" text-white fs-mobile">Shop</button>
              </Link>
            </li>
            <Link to="/Login">
              <li>
                <button className=" text-white fs-mobile">Login</button>
              </li>
            </Link>
            <Link to="/Cart">
              <li className="shake">
                <button className=" text-white fs-mobile text-shadow">
                  <img
                    onMouseOver={() => setOver(true)}
                    onMouseOut={() => setOver(false)}
                    className="icons"
                    src={over ? carthover : cartBlack}
                    loading="lazy"
                    alt="Shopping-cart icon"
                  />
                </button>
              </li>
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
