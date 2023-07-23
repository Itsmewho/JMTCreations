/** @format */

import React from "react";
import { useState } from "react";
import "../styles/blog.css";
import Tilt from "react-parallax-tilt";
import Snake from "../assets/SnakeLady.webp";
import Dansers from "../assets/Dansers.webp";
import Express from "../assets/Expressionism.webp";
import man from "../assets/AbstractMan.webp";
import wander from "../assets/Wandering.webp";
import punk from "../assets/PunkGirl.webp";
import africa from "../assets/africa.webp";
import blueEyes from "../assets/BlueEyes.webp";
import WomaninRed from "../assets/Womaninred.webp";

const MyCollection = [
  {
    label:
      "Revealing the Soul's Tapestry: A Captivating Fusion of Hyperrealism and Abstract Expressionism",
    titleblog: "Revealing the Soul's Tapestry",
    parag:
      "'A Captivating Fusion of Hyperrealism and Abstract Expressionism', is a spectacular portrait that transcends traditional boundaries, combining the raw emotion of expressionism.",
    imgPath: man,
    link: "#",
  },
  {
    label: "Depicts a full-body profile portrait of a captivating DJ woman",
    titleblog: "Synthetic Symphony",
    parag:
      "'A Cyberpunk Muse in Futuristic Rhythms', depicts a full-body profile portrait of a captivating DJ woman.",
    imgPath: punk,
    link: "#",
  },
  {
    label:
      "The artwork combines warm ochre and steel grey hues to create a harmonious visual composition. The use of asymmetry adds a sense of dynamism and intrigue.",
    titleblog: "City Wanderer",
    parag:
      "'Whispers in a Steel Grey Symphony', is a captivating painting that portrays a woman adorned in a dress, navigating through a bustling cityscape.",
    imgPath: wander,
    link: "#",
  },
  {
    label:
      "The abstract composition merges bold brushstrokes and vibrant colors, evoking the rhythm and vibrancy of urban life.",
    titleblog: "Urban Symphony",
    parag:
      "'The Stride of Elegance' captures the dynamic energy of a woman gracefully walking through the city in a striking black and red dress.",
    imgPath: WomaninRed,
    link: "#",
  },
  {
    label:
      "The artist's use of bold brushstrokes and vibrant colors creates a powerful contrast.",
    titleblog: "Enigmatic Contrasts",
    parag:
      "The artwork delves into the depths of her soul, revealing a captivating blend of vulnerability and inner strength",
    imgPath: blueEyes,
    link: "#",
  },
  {
    label: "Soulful Essence: The Grace of Africa's Daughters",
    titleblog: "Vibrant Rhythms",
    parag:
      "The timeless beauty and inner strength of an African woman, exuding elegance and resilience",
    imgPath: africa,
    link: "#",
  },
];

const BlogIntro = () => {
  const [item, setItem] = useState(0);
  const length = MyCollection.length;

  const NextSlide = () => {
    setItem(item === length - 1 ? 0 : item + 1);
  };
  const PreSlide = () => {
    setItem(item === 0 ? length - 1 : item - 1);
  };

  if (!Array.isArray(MyCollection) || MyCollection.length <= 0) {
    return null;
  }

  return (
    <section className="section-3">
      <div className="spacer"></div>
      <div>
        <h3 className=" fs-900 text-brown blog-title">Blogs</h3>
      </div>
      <div className="background">
        <div className="flex intro-blog-layout">
          <div className="blog-short-text">
            <h4 className=" fs-600 text-brown">
              {MyCollection[item].titleblog}
            </h4>
            <p className=" fs-400 blog-intro-paragraph">
              {MyCollection[item].parag}
            </p>
            <div>
              <button
                href={MyCollection[item].link}
                className="main-button  uppercase shake short-btn">
                go to post
              </button>
            </div>
          </div>
          <div className="blog-intro-image">
            <Tilt tiltReverse={true}>
              <img
                loading="lazy"
                className="blog-middle-image box-shadow "
                src={MyCollection[item].imgPath}
                alt={MyCollection[item].label}
              />
            </Tilt>
          </div>
          <div className="popular-post-section">
            <div className="popularpost">
              <div>
                <h4 className=" fs-600">Popular Articles</h4>
                <div className="flex artikel-image">
                  <Tilt tiltReverse={true}>
                    <img
                      loading="lazy"
                      src={Dansers}
                      alt="abstract couple dancing"
                      className="artikel-intro-img box-shadow "
                    />
                  </Tilt>
                  <div className="grid short-text">
                    <p className="fs-400 ">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex artikel-image">
                  <Tilt tiltReverse={true}>
                    <img
                      loading="lazy"
                      src={Express}
                      alt="expression of a man"
                      className="artikel-intro-img box-shadow"
                    />
                  </Tilt>
                  <div className="grid short-text">
                    <p className="fs-400 ">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex artikel-image">
                  <Tilt tiltReverse={true}>
                    <img
                      loading="lazy"
                      src={Snake}
                      alt="girl with a snake skin"
                      className="artikel-intro-img box-shadow"
                    />
                  </Tilt>
                  <div className="grid short-text">
                    <p className="fs-400 ">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="toggle-buttons">
          <button className="toggle-btn  fs-400 bold shake" onClick={PreSlide}>
            &#60;
          </button>
          <button className="toggle-btn  fs-400 bold shake" onClick={NextSlide}>
            &#62;
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogIntro;
