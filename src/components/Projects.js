import { useState } from "react";
import "../css/Projects.scss";

export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Final Project",
      desc: "As a graduation project at Salt, my mob and I built an app that displays and manages Salt's company devices. The app is built using React, Google OAuth, Express, Mongoose, JWT, and MongoDB The client code can be found here. and the server code can be found here.",
      img: "assets/finalProject.png",
      href: "",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Hack Day Project",
      desc: "A fullstack app build with React and Express in eighth hours during my Salt Hackday. It allows users to search authors in the Gutenberg Project and download books in epub format.",
      img: "assets/weatherapp.png",
      href: "https://github.com/Amani2392/HacKDay-SALT",
    },
    {
      id: "3",
      icon: "React Redux Todo App",
      title: "React Redux Todo App",
      desc: "A todo react app using Redux for state managment.",
      img: "assets/react-redux-todo-app.png",
      href: "https://github.com/Amani2392/Todo-App-with-React-Redux",
    },
    {
      id: "4",
      icon: "",
      title: "React Todo App",
      desc: "A react todo app.",
      img: "assets/react todo app.png",
      href: "https://github.com/Amani2392/React-todo-app-",
    },
    {
      id: "5",
      icon: "",
      title: "Vanilla JS Todo App",
      desc: "A vanilla JS with state managment.",
      img: "assets/vanilla-js-todo.png",
      href: "https://github.com/Amani2392/Todo-app-javaScript-with-state",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 4)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="Projects">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                 <a href={d.href} target="_blank" rel="noreferrer"> 
                  <div className="SourceCodeContainer">
                 <img  src="assets/github.png" alt=""/>
                 <span>Source code</span>
                 </div>
                 </a>
                </div>
              </div>
              <div className="right">
              <img  src={d.img} alt=""/>
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/left-arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/right-arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}