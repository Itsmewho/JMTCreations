/** @format */

import React from "react";
import { Link } from "react-router-dom";
import "../styles/categroys.css";
import Tilt from "react-parallax-tilt";
import beautiful from "../assets/Portrait.jpg";
import flamingo from "../assets/flamingo.jpg";
import glasses from "../assets/glasses.jpg";
import persian from "../assets/persian.jpg";
import expression from "../assets/Expression.jpg";
import random from "../assets/random.jpg";

const CategoryScreen = () => {
  return (
    <section className="section-cat">
      <div className="grid-container">
        <div className="category-grid">
          <Link to="/Portraits">
            <div className="grid-block box-shadow">
              <div className="cart-container">
                <h1 className="cart-title fs-400 text-brown letter-spacing">
                  Portraits
                </h1>
                <div className="cart-content">
                  <Tilt titlReverse={true}>
                    <img
                      className="cart-image"
                      src={beautiful}
                      alt="A striking portrait in an expressionism style oil painting. The subject's face is a combination of hyperrealism and abstract expressionism, with visible brush strokes and vivid colors. The composition is dynamic, featuring high contrast and resplendent use of light, evoking an intriguing and mysterious atmosphere."
                    />
                  </Tilt>
                  <div className="cart-text">
                    <h2 className="fs-400 text-green ">Description:</h2>
                    <p className="cart-discription cart-desciption text-white">
                      Abstract paintings: They're vibrant portals to a whimsical
                      dimension, where untamed brushstrokes and bold hues
                      collide in a lively symphony.
                    </p>
                    <h3 className=" fs-400 text-green cart-style">Slogan:</h3>
                    <p className="cart-slogan cart-slogan text-white">
                      Embrace the Colors, Ignite Your Imagination!
                    </p>
                  </div>
                  <div className="cart-cta">
                    <button className="main-button bold shake">&#62;</button>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/PopAnime">
            <div className="grid-block box-shadow">
              <div className="cart-container">
                <h1 className="cart-title fs-400 text-brown letter-spacing">
                  Pop Anime
                </h1>
                <div className="cart-content">
                  <Tilt titlReverse={true}>
                    <img
                      className="cart-image"
                      src={glasses}
                      alt="An explosion of vibrant colors and energetic characters representing Pop Anime Art."
                    />
                  </Tilt>
                  <div className="cart-text">
                    <h2 className="fs-400 text-green ">Description:</h2>
                    <p className="cart-discription cart-desciption text-white">
                      Dive into a world of vibrant colors, larger-than-life
                      characters, and boundless imagination. Pop Anime Art is a
                      captivating fusion of pop culture.
                    </p>
                    <h3 className=" fs-400 text-green cart-style">Slogan:</h3>
                    <p className="cart-slogan cart-slogan text-white">
                      Pop Anime Art: Where Colors Collide, Imagination Thrives!
                    </p>
                  </div>
                  <div className="cart-cta">
                    <button className="main-button bold shake">&#62;</button>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/Watercolors">
            <div className="grid-block box-shadow">
              <div className="cart-container">
                <h1 className="cart-title fs-400 text-brown letter-spacing">
                  Watercolors
                </h1>
                <div className="cart-content">
                  <Tilt titlReverse={true}>
                    <img
                      className="cart-image"
                      src={persian}
                      alt="An abstract watercolor painting showcasing a lively blend of vibrant colors and fluid brushstrokes. The artwork evokes a sense of imagination and creative freedom"
                    />
                  </Tilt>
                  <div className="cart-text">
                    <h2 className="fs-400 text-green ">Description:</h2>
                    <p className="cart-discription cart-desciption text-white">
                      Step into a vibrant world where colors dance and
                      imagination soars. Abstract watercolor paintings are
                      portals to boundless creativity.
                    </p>
                    <h3 className=" fs-400 text-green cart-style">Slogan:</h3>
                    <p className="cart-slogan cart-slogan text-white">
                      Your Imagination with Abstract Watercolors!!
                    </p>
                  </div>
                  <div className="cart-cta">
                    <button className="main-button bold shake">&#62;</button>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/Fullbody">
            <div className="grid-block box-shadow">
              <div className="cart-container">
                <h1 className="cart-title fs-400 text-brown letter-spacing">
                  Fullbody
                </h1>
                <div className="cart-content">
                  <Tilt titlReverse={true}>
                    <img
                      className="cart-image"
                      src={flamingo}
                      alt="An abstract watercolor painting showcasing a lively blend of vibrant colors and fluid brushstrokes. The artwork evokes a sense of imagination and creative freedom"
                    />
                  </Tilt>
                  <div className="cart-text">
                    <h2 className="fs-400 text-green ">Description:</h2>
                    <p className="cart-discription cart-desciption text-white">
                      Step into a world where colors come alive, where the
                      canvas becomes a stage, and brush strokes dance with the
                      rhythm of expression.
                    </p>

                    <h3 className=" fs-400 text-green cart-style">Slogan:</h3>
                    <p className="cart-slogan cart-slogan text-white">
                      Brushstrokes of Life, Where Colors Dance
                    </p>
                  </div>
                  <div className="cart-cta">
                    <button className="main-button bold shake">&#62;</button>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/Expression">
            <div className="grid-block box-shadow">
              <div className="cart-container">
                <h1 className="cart-title fs-400 text-brown letter-spacing">
                  Expressions
                </h1>
                <div className="cart-content">
                  <Tilt titlReverse={true}>
                    <img
                      className="cart-image"
                      src={expression}
                      alt="The artwork's expressive energy transcends reality, inviting viewers to explore boundless realms of imagination. It whispers stories of joy, passion, and introspection, captivating the senses with its untamed beauty."
                    />
                  </Tilt>
                  <div className="cart-text">
                    <h2 className="fs-400 text-green ">Description:</h2>
                    <p className="cart-discription cart-desciption text-white">
                      Enter a world where brushstrokes explode with emotion,
                      swirling and colliding in a symphony of color.
                    </p>
                    <h3 className=" fs-400 text-green cart-style">Slogan:</h3>
                    <p className="cart-slogan cart-slogan text-white">
                      Embrace the Abstract Symphony
                    </p>
                  </div>
                  <div className="cart-cta">
                    <button className="main-button bold shake">&#62;</button>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/Random">
            <div className="grid-block box-shadow">
              <div className="cart-container">
                <h1 className="cart-title fs-400 text-brown letter-spacing">
                  Random
                </h1>
                <div className="cart-content">
                  <Tilt titlReverse={true}>
                    <img
                      className="cart-image"
                      src={random}
                      alt="A fusion of styles, 'whater-ever-you-make-it', art defies definition. A captivating visual journey that inspires, provokes, and delights"
                    />
                  </Tilt>
                  <div className="cart-text">
                    <h2 className="fs-400 text-green ">Description:</h2>
                    <p className="cart-discription cart-desciption text-white">
                      Embrace the unexpected, be mesmerized by vibrant colors,
                      life like portraits, and audacious fusions.
                    </p>
                    <h3 className=" fs-400 text-green cart-style">Slogan:</h3>
                    <p className="cart-slogan cart-slogan text-white">
                      Unleash the Unexpected!
                    </p>
                  </div>
                  <div className="cart-cta">
                    <button className="main-button bold shake">&#62;</button>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoryScreen;
