import React, { Component, useState } from "react";
import "../styles/App.css";
import SlideShow from "./slideShow";

const App = (props) => {
  return (
    <>
      <SlideShow slides={props.slides} />
    </>
  );
};

export default App;
