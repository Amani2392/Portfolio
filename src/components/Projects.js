import { useState } from "react";
import "../css/Projects.scss";

export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: " My Portfolio",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img: "assets/portfolio.png",
      href: "https://github.com/Amani2392/Portfolio",
    },
    {
      id: "2",
      icon: "./assets/mobile.png",
      title: "Final Project",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img: "assets/finalProject.png",
      href: "",
    },
    {
      id: "3",
      icon: "./assets/globe.png",
      title: "Hack Day Project",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "assets/weatherapp.png",
      href: "https://github.com/Amani2392/HacKDay-SALT",
    },
    {
      id: "4",
      icon: "React Redux Todo App",
      title: "React Redux Todo App",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "assets/react-redux-todo-app.png",
      href: "",
    },
    {
      id: "5",
      icon: "",
      title: "React Todo App",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "assets/react todo app.png",
      href: "",
    },
    {
      id: "6",
      icon: "",
      title: "Vanilla JS Todo App",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "assets/vanilla-js-todo.png",
      href: "",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 5)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="Projects">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
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
