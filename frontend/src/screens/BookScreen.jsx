/** @format */

import "../styles/bookscreen.css";
import { Helmet } from "react-helmet-async";
import React, { useState } from "react";
import { useGetBookQuery } from "../slices/bookApiSlice";
import Bookcover from "../assets/Book-cover-jmtcreations.webp";
import text from "../assets/text-part.jpg";
import intro from "../assets/Intro.jpg";
import firstpage from "../assets/FirstPage.jpg";
import Tilt from "react-parallax-tilt";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";

const MyBookCollection = [
  {
    label: "Book Cover of divide and conquer",
    image: Bookcover,
  },
  {
    label: "Book Cover of divide and conquer",
    image: text,
  },
  {
    label: "Book Cover of divide and conquer",
    image: intro,
  },
  {
    label: "Book Cover of divide and conquer",
    image: firstpage,
  },
];

const BookScreen = () => {
  const { id: bookId } = useParams();
  const dispatch = useDispatch();

  const { data: book, isLoading, error } = useGetBookQuery(bookId);

  const [item, setItem] = useState(0);
  const length = MyBookCollection.length;

  const NextSlide = () => {
    setItem(item === length - 1 ? 0 : item + 1);
  };
  const PreSlide = () => {
    setItem(item === 0 ? length - 1 : item - 1);
  };
  if (!Array.isArray(MyBookCollection) || MyBookCollection.length <= 0) {
    return null;
  }

  const addToCartHandler = () => {
    let change = document.getElementById("change");
    const initailText = change.innerText;
    change.innerText = "Done";

    setTimeout(() => {
      change.innerText = initailText;
    }, 1000);

    dispatch(addToCart({ ...book }));
  };

  return (
    <>
      {isLoading ? (
        <h2 className="layout-shift">Loading,...</h2>
      ) : error ? (
        <div> {error?.data?.message || error.error}</div>
      ) : (
        <>
          <Helmet>
            <title>JMT-Creations | Book</title>
            <meta
              name="description"
              content="Divide And Conquer: The Road to Superintelligence. This book explores the history and development of AI, as well as its ethical implications and potential impact on society. It's a must-read for anyone interested in technology, science, or the future of humanity."
            />
            <link rel="canonical" href="/Book" />
            <link rel="shortcut icon" href="./Favicon.svg" type="icon.svg" />
          </Helmet>
          <section className="section">
            <div className="book-page box-shadow">
              <div className="flex book-top-section">
                <div className="book-leftside-2">
                  <h1 className="fs-800 text-brown text-shadow book-page-title">
                    - Divide And Qonquer
                  </h1>
                  <h2 className="fs-600 text-green book-page-subtitle">
                    A New World
                  </h2>
                  <p className="text-white fs-400 book-page-paragraph-top">
                    Divide And Conquer: The Road to Superintelligence. This book
                    explores the history and development of AI, as well as its
                    ethical implications and potential impact on society. It's a
                    must-read for anyone interested in technology, science, or
                    the future of humanity.
                  </p>
                  <p className="book-price fs-400 book-page-price">
                    For only: 9.99$
                  </p>
                  <div className="book-page-cta">
                    <button
                      id="change"
                      type="button"
                      onClick={addToCartHandler}
                      className="book-button-2 fs-400 shake">
                      Add To cart
                    </button>
                  </div>
                </div>
                <div className="book-rightside-2">
                  <div className="book-grid-2">
                    <div className="book-flex-2">
                      <div className="book-button-center">
                        <button
                          className="book-button-2 prev-btn fs-400 text-dark shake"
                          onClick={PreSlide}>
                          Prev
                        </button>
                      </div>
                      <div>
                        <Tilt tiltReverse={true}>
                          <img
                            className="main-image-2 box-shadow"
                            src={MyBookCollection[item].image}
                            alt={MyBookCollection[item].label}
                          />
                        </Tilt>
                      </div>
                      <div className="book-button-center">
                        <button
                          className="book-button-2 prev-btn fs-400 text-dark shake"
                          onClick={NextSlide}>
                          Next
                        </button>
                      </div>
                    </div>

                    <div className="book-flex-2">
                      <div className="thumbnail-images-2">
                        <div className="thumbnai-box-2">
                          <img
                            className="thumbnail"
                            src={MyBookCollection[(item, [+1])].image}
                            alt={MyBookCollection[item].label}
                            onClick={PreSlide}
                          />
                        </div>
                        <div className="thumbnail-box-2">
                          <img
                            className="thumbnail"
                            src={MyBookCollection[(item, [+2])].image}
                            alt={MyBookCollection[item].label}
                            onClick={PreSlide}
                          />
                        </div>
                        <div className="thumbnail-box-2">
                          <img
                            className="thumbnail"
                            src={MyBookCollection[(item, [+3])].image}
                            alt={MyBookCollection[item].label}
                            onClick={PreSlide}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="book-description">
                <h3 className="fs-600 text-green book-paragraph-description">
                  Description:
                </h3>
                <p className="fs-400 text-white book-page-paragraph">
                  Looking for a book that will blow your mind and leave you with
                  a new perspective on the world around you? Look no further
                  than "Divide And Qonquer". This book is a captivating journey
                  into the world of AI, exploring its history, development, and
                  the ethical implications of its rapid evolution. The author
                  provides readers with insight into the potential impact of AI
                  on society and the economy, as well as the various risks and
                  benefits associated with its development. The book takes a
                  comprehensive approach to the topic, covering everything from
                  the basics of AI technology to machine learning, neural
                  networks, and deep learning. It's a perfect read for anyone
                  interested in understanding the rapidly evolving field of AI,
                  and the role it will play in shaping our future. Whether
                  you're a tech enthusiast, a professional in the field, or just
                  curious about the world around you, this book is sure to
                  inspire and educate you.
                </p>
                <div className="flex book-button-buttom">
                  <Link to={"/"}>
                    <button className="book-button-2 fs-400 shake">
                      Go back
                    </button>
                  </Link>
                  <button
                    id="change"
                    type="button"
                    onClick={addToCartHandler}
                    className="book-button-2 fs-400 shake">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default BookScreen;
