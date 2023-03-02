import React, { useState } from "react";
import "./Topics.css";
import {
  frequencies,
  daw,
  vocalsProcessing,
  mixing,
  mixingConsole,
  mastering,
  bgElement1,
} from "../../assets";

const Topics = () => {
  const [currentImage, setCurrentImage] = useState(frequencies);

  return (
    <section id="topics" className="black">
      <div className="wrapper">
        <h2>What will you learn?</h2>
        <div className="content-container">
          <ul className="topics-list">
            <li onClick={() => setCurrentImage(frequencies)}>
              What are frequencies?
            </li>
            <li onClick={() => setCurrentImage(daw)}>What are frequencies?</li>
            <li onClick={() => setCurrentImage(vocalsProcessing)}>
              What are frequencies?
            </li>
            <li onClick={() => setCurrentImage(mixing)}>
              What are frequencies?
            </li>
            <li onClick={() => setCurrentImage(mixingConsole)}>
              What are frequencies?
            </li>
            <li onClick={() => setCurrentImage(mastering)}>
              What are frequencies?
            </li>
          </ul>
          <div className="topic-image">
            <img src={currentImage} alt="..." />
          </div>
        </div>
        <img src={bgElement1} alt="..." className="bg-element-1" />
      </div>
    </section>
  );
};

export default Topics;
