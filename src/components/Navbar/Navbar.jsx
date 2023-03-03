import React, { useState } from "react";
import "./Navbar.css";
import { menuIcon, closeIcon } from "../../assets";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <nav>
        <a href="#" className="logo">
          Habitat<span className="red">Nataniela</span>
        </a>

        <ul>
          <li>
            <a href="#topics">Umiejętności</a>
          </li>

          <li>
            <a href="#info">Normy</a>
          </li>

          <li>
            <a href="#blog">Blog</a>
          </li>

          <li>
            <a href="#testimonials">Powiedzieli</a>
          </li>
        </ul>

        <div onClick={() => setIsActive(true)} className="menu-icon">
          <img src={menuIcon} alt="..." />
        </div>
      </nav>

      <div className={`mobile-menu-container ${isActive ? "active" : ""}`}>
        <div onClick={() => setIsActive(false)} className="close-icon">
          <img src={closeIcon} alt="..." />
        </div>

        <ul className="menu-items">
          <li>
            <a href="#topics" onClick={() => setIsActive(false)}>
              Umiejętności
            </a>
          </li>

          <li>
            <a href="#info" onClick={() => setIsActive(false)}>
              Normy
            </a>
          </li>

          <li>
            <a href="#blog" onClick={() => setIsActive(false)}>
              Blog
            </a>
          </li>

          <li>
            <a href="#testimonials" onClick={() => setIsActive(false)}>
              Powiedzieli
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
