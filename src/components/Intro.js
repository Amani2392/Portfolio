import React from "react";
import "../css/Intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,

      strings: ["Full-stack Developer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left"></div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there 🖐️, I'm</h2>
          <h1>Amani Baba Haj</h1>
          <h3>
            <span className="h3" ref={textRef}></span>
          </h3>
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
