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
        <h2>Czego się nauczyłem?</h2>
        <div className="content-container">
          <ul className="topics-list">
            <li onClick={() => setCurrentImage(daw)}>Siedzieć</li>
            <li onClick={() => setCurrentImage(frequencies)}>Raczkować</li>
            <li onClick={() => setCurrentImage(vocalsProcessing)}>
              Jeść w foteliku
            </li>
            <li onClick={() => setCurrentImage(mixing)}>Bawić się zabawkami</li>
            <li onClick={() => setCurrentImage(mixingConsole)}>
              Wstawać do pionu
            </li>
            <li onClick={() => setCurrentImage(mastering)}>
              Obgryzać książeczki
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
