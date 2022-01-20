import React from "react";
import "../css/Intro.scss";

const Intro = () => {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img
            src="https://cdn.dribbble.com/users/1099127/screenshots/14424196/media/095e190c4e31def255c16f4c7e98f619.gif"
            alt="logo"
          />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Amani Baba Haj</h1>
          <h3>JavaScript Developer</h3>
        <a href="#Projects">
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
