import "./App.scss";
import React from "react";
import { useState } from "react";
import Topbar from "../src/components/Topbar";
import Intro from "../src/components/Intro";
import Portfolio from "../src/components/Portfolio";
import Work from "../src/components/Work";
import Contact from "../src/components/Contact";
import Menu from "../src/components/Menu";

const App = () => {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <div className="App">
      <Topbar menuActive={menuActive} setMenuActive={setMenuActive} />
      <Menu menuActive={menuActive} setMenuActive={setMenuActive} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Work />
        <Contact />
      </div>
    </div>
  );
};

export default App;
