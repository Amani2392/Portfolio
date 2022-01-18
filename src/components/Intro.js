import React from "react";
import "../css/Intro.scss";

const Intro = () => {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img
            src="https://media3.giphy.com/media/USV0ym3bVWQJJmNu3N/giphy.gif?cid=ecf05e47c2pk1465mup9vp2a341bhv5nsvsdaf7vmt8lje9e&rid=giphy.gif&ct=g"
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
