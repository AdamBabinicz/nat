import React from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <Navbar />
        <div className="cta">
          <p className="course-name">dar od Boga</p>
          <h1>Dziecko</h1>
          <a href="#" className="demo-btn">
            Zobacz
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
