import React from "react";
import "./Footer.css";
import { instagramLogo, facebookLogo, twitterLogo } from "../../assets";

const Footer = () => {
  return (
    <footer className="black">
      <div className="wrapper">
        <div className="content-container">
          <div className="links">
            <a href="#" className="logo">
              Habitat<span className="red">Nataniela</span>
            </a>
            <div className="social-icons">
              <a href="#">
                <img src={facebookLogo} alt="..." />
              </a>
              <a href="#">
                <img src={twitterLogo} alt="..." />
              </a>
              <a href="#">
                <img src={instagramLogo} alt="..." />
              </a>
            </div>
            <div className="copyright">
              <a href="https://a-g.netlify.app">a-g</a>
            </div>
          </div>
          <div className="links">
            <h3>Szybkie linki</h3>
            <ul>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Polityka prywatności</a>
              </li>
            </ul>
          </div>
          <div className="links">
            <h3>Kontakt</h3>
            <ul>
              <li>
                <a href="mailto:puaro@vp.pl">puaro@vp.pl</a>
              </li>
            </ul>
          </div>
          <div className="copyright mobile">
            Radom, 2022 - {new Date().getFullYear()}.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
