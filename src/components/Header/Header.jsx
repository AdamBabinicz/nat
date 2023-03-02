import React from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <Navbar />
        <div className="cta">
          <p className="course-name">Sound</p>
          <h1>Learn</h1>
          <a href="#" className="demo-btn">
            Demo
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
