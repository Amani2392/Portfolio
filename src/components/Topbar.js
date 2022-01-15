import React from "react";
import "../css/Topbar.scss";

const Topbar = ({ menuActive, setMenuActive }) => {
  return (
    <div className={"topbar " + (menuActive && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Amani Baba Haj
          </a>
          <div className="nav-bar-items">
            <i class="fas fa-mobile-alt"></i>
            <span>+46 728 47 00 18</span>
          </div>
          <div className="nav-bar-items">
            <i class="fas fa-at"></i>
            <span>amani.babahaj@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div
            className="hamburger-menu"
            onClick={() => setMenuActive(!menuActive)}
          >
            <span className="tab1"></span>
            <span className="tab2"></span>
            <span className="tab3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
