import "./App.scss";
import React from "react";
import { useState } from "react";
import Topbar from "../src/components/Topbar";
import Menu from "../src/components/Menu";
import Intro from "../src/components/Intro";
import Projects from "../src/components/Projects";
import Portfolio from "../src/components/Portfolio";
import Contact from "../src/components/Contact";

const App = () => {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <div className="App">
      <Topbar menuActive={menuActive} setMenuActive={setMenuActive} />
      <Menu menuActive={menuActive} setMenuActive={setMenuActive} />
      <div className="sections">
        <Intro />
        <Projects />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
};

export default App;
