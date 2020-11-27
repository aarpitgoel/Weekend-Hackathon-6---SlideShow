import React, { Component, useState } from "react";
import "../styles/App.css";

const SlideShow = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    //console.log("prev");
    let newSlideIndex = currentSlide;
    newSlideIndex--;
    setCurrentSlide(newSlideIndex);
  };
  const nextSlide = () => {
    //console.log("next");
    let newSlideIndex = currentSlide;
    newSlideIndex++;
    setCurrentSlide(newSlideIndex);
  };

  let prevDisable = currentSlide === 0 ? true : false;
  let nextDisable = currentSlide === slides.length - 1 ? true : false;
  // console.log(prevDisable);

  return (
    <>
      <div>
        <div style={{ height: 500, width: "60vw", border: "1px solid black" }}>
          <h1 data-testid="title">{slides[currentSlide].title}</h1>

          <p data-testid="text">{slides[currentSlide].text}</p>
        </div>
        <button
          data-testid="button-prev"
          onClick={prevSlide}
          disabled={prevDisable}
        >
          Prev
        </button>
        <button
          data-testid="button-restart"
          onClick={() => setCurrentSlide(0)}
          style={{ margin: "20px" }}
          disabled={prevDisable}
        >
          Restart
        </button>
        <button
          data-testid="button-next"
          onClick={nextSlide}
          disabled={nextDisable}
        >
          Next
        </button>
      </div>
    </>
  );
};
export default SlideShow;
