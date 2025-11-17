import React, { useState } from "react";
import { post } from "../data/dummyData";

const Post = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % post.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + post.length) % post.length);
  };

  const { title, description, ctaButton, image } = post[currentIndex];

  return (
    <section className="post" style={{ backgroundImage: `url(${image})` }}>
      <button className="post__arrow left" onClick={handlePrev}>
        &#10094;
      </button>
      <div className="post__content">
        <div className="post__text">
          <h1 className="post__title">{title}</h1>
          <p className="post__description">{description}</p>
          <button className="post__cta-btn">{ctaButton}</button>
        </div>
      </div>
      <button className="post__arrow right" onClick={handleNext}>
        &#10095;
      </button>
    </section>
  );
};

export default Post;