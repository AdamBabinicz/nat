import React, { useEffect, useState } from "react";
import { urlFor, client } from "../../client";
import "./Blog.css";
import img from "../../assets/1.mp4";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  useEffect(() => {
    const query = '*[_type == "posts"][0..5]';

    client.fetch(query).then((data) => {
      setPosts(data);
    });
  }, []);

  return (
    <section id="blog" className="pink">
      <div className="wrapper">
        <h2 className="light">Ostatnie posty</h2>
        <div className="content-container">
          {posts.map((post) => (
            <div className="post">
              <div className="tag">{post.label}</div>
              <a href="#">
                <img src={urlFor(post.thumbnail)} alt="..." />
              </a>

              <a href="#">
                <h3 className="post-title">{post.title}</h3>
              </a>
            </div>
          ))}
        </div>

        <div className="btn-container">
          <a href="#" className="all-posts-btn" onClick={() => toggleTab(1)}>
            Obejrzyj
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
            <video autoPlay controls>
              <source src={img} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
