import React from "react";
import "../css/Menu.scss";

const Menu = ({ menuActive, setMenuActive }) => {
  return (
    <div className={"menu " +(menuActive && "active")}>
      <ul>
        <li onClick={() => setMenuActive(false)}>
          <a href="#intro"> Home </a>
        </li>
        <li onClick={() => setMenuActive(false)}>
          <a href="#Projects"> Projects </a>
        </li>
        <li onClick={() => setMenuActive(false)}>
          <a href="#portfolio"> About me </a>
        </li>
        <li onClick={() => setMenuActive(false)}>
          <a href="#contact"> Contact </a>
        </li>
      </ul>
    </div>
  );
};
export default Menu;
