import React from "react";
import "./Info.css";
import { studentIcon, videoIcon, bgElement2 } from "../../assets";

const Info = () => {
  return (
    <section id="info" className="dark-gray">
      <div className="wrapper">
        <div className="content-container">
          <div className="info-content">
            <img src={studentIcon} alt="..." />
            <div className="amount">400 m</div>
            <div className="type">dziennie</div>
          </div>
          <div className="info-content">
            <img src={videoIcon} alt="..." />
            <div className="amount">min 3x</div>
            <div className="type">na tydzień</div>
          </div>
        </div>
        <img className="bg-element-2" src={bgElement2} alt="..." />
      </div>
    </section>
  );
};

export default Info;
