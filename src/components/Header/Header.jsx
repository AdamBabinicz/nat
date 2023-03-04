import React, { useState } from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import img from "../../assets/21.jpg";

const Header = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <header>
      <div className="wrapper">
        <Navbar />
        <div className="cta">
          <p className="course-name">dar od Boga</p>
          <h1>Dziecko</h1>
          <a href="#" className="demo-btn" onClick={() => toggleTab(1)}>
            Zobacz
          </a>
        </div>
      </div>
      <div
        className={
          toggleState === 1 ? "services__modal active-modal" : "services__modal"
        }
      >
        <div className="services__modal-content">
          <i
            onClick={() => toggleTab(0)}
            className="uil uil-times services__modal-close"
          ></i>
          {/* <h3 className="services__modal-title">Ochrona planety i kieszeni</h3>
          <p className="services__modal-description">
            Gotuję przeważnie jakieś potrawy, które wymyślam, mając do
            wykorzystania jakiś produkt przeważnie, żeby zapobiec jego
            wyrzuceniu lub zepsuciu. Metoda "zero waste", ponieważ nie lubię
            wyrzucać jedzenia i&nbsp;jestem w stanie przerobić praktycznie
            wszystko.
          </p> */}
          <div className="services__modal-services">
            <img src={img} alt="..." />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
