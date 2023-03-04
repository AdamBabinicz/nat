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
              <a
                href="https://www.facebook.com/ewa.kucharska.5439"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebookLogo} alt="..." />
              </a>
              <a
                href="https://twitter.com/Ewa28502857?fbclid=IwAR0U3ELpE1OiUabwe__nQuLZzJpJnLSjfDduhITYGt7f-ljLlMqMTcFVX0U"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitterLogo} alt="..." />
              </a>
              <a
                href="https://www.instagram.com/ewa1989/?fbclid=IwAR28hBz-zC2FrpGtBy8CNQwOebyI2u0WFM0uANx84fqIa8TDU7mZ0DNU8Rc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagramLogo} alt="..." />
              </a>
            </div>
            <div className="copyright">
              <a
                href="https://a-g.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                a-g
              </a>
            </div>
          </div>
          <div className="links">
            <h3>Szybkie linki</h3>
            <ul>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#umiejetnosci">Umiejętności</a>
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
