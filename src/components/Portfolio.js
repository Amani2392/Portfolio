import React from "react";
import "../css/Portfolio.scss";

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <div className="left">
        <img className="my-pic" src="assets/my-pic.png" alt=""></img>
        <a
          href="assets/cv.pdf"
          target="_blank"
          class="button-53"
        >
          Download my cv!
        </a>
        <img className="arrow" src="assets/arrow.png" alt="" />
        <div className="text-container">
          <p>
            I last graduated from the{" "}
            <a href="https://salt.dev/" target="_blank" rel="noreferrer">
              {" "}
              {"</salt>"}
            </a>{" "}
            bootcamp which is an intensive three month training program for full
            stack web development with a focus on TDD, mob programming, agile
            and applied learning.
          </p>
        </div>
      </div>
      <div className="right">
        <ul>
          <h1>
            {" "}
            Skills <img src="assets/skillsicon.jpeg" alt="" />
          </h1>
          <h2>General</h2>
          <li>JavaScript</li><li>, Servicenow</li><li>, Microsoft 365 </li><li>&
Azure</li>
          <h2>Backend</h2>
          <li>ExpressJS</li>
          <li>GraphQL</li>
          <li>NodeJS</li>
          <li>Axios</li>
          <li>REST</li>
          <li>MongoDB | PostgreSQL | Mongoose</li>
          <h2>Frontend</h2>
          <li>React</li>
          <li>Redux</li>
          <li>HTML</li>
          <li>CSS,Scss</li>
          <h2>Tools and technologies</h2>
          <li>Visual Studio Code</li>
          <li>Figma</li>
          <li>Mocha/Jest</li>
          <li> Git</li>
          <li>AWS</li>
          <h2>Cloud Platforms</h2>
          <li>MongoD | Atlas | ElephantSQL | Netlify | Heroku | Contentful</li>
        </ul>
      </div>
    </div>
  );
};

export default Portfolio;
