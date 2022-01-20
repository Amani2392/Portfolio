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
