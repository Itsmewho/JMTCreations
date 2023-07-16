/** @format */
import { Link } from "react-router-dom";
import "../styles/book.css";
import BookCover from "../assets/Book-cover-jmtcreations.webp";
import Tilt from "react-parallax-tilt";

const Book = () => {
  return (
    <section className="section-2">
      <div className="flex book-grid">
        <div className="leftside-book">
          <h2 className=" fs-800 text-brown title-book">Divide And Conquer</h2>
          <div className="flex">
            <div className="penstripe"></div>
            <div className="book-text">
              <h3 className=" fs-600 text-white">A New World</h3>
              <p className=" fs-400 text-white paragraph">
                Introducing the must-read book for anyone interested in the
                fascinating world of artificial intelligence! This book covers
                everything from the history and development of AI to its
                potential future and impact on society.{" "}
                <span className="mobile">
                  You'll gain a deeper understanding of the role AI plays in our
                  lives and its ethical implications, including the possible
                  risks and benefits of its development.
                </span>
              </p>
              <Link to="/Book">
                <button className="main-button  shake uppercase letter-spacing">
                  Shop
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="rightside-book">
          <div>
            <div className="blob"></div>
            <Tilt tiltReverse={true}>
              <img
                className="book-image"
                src={BookCover}
                alt="Book Cover of divide and conquer"
              />
            </Tilt>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;
