import React from "react";
import "../css/Intro.scss";

const Intro = () => {
  return (
    <div className="intro" id="intro">
      <div className="left">
       
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hello World 🖐️, I'm</h2>
          <h1>Amani Baba Haj</h1>
          <h3>JavaScript Developer</h3>
        <a href="#portfolio">
          <img
            src="assets/down-arrow-png-transparent-down-arrow.png"
            alt="arrow down"
          />
        </a>
        </div>
      </div>
    </div>
  );
};
export default Intro;
