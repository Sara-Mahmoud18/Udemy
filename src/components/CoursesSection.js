import React, { useState } from "react";
import { tabs, coursesData } from "../data/dummyData";

const visibleCards = 4;
const CoursesSection = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalCards = coursesData.length;


const handleNext = () => {
  setCurrentIndex((prev) => {
    const nextIndex = prev + 1;
    return nextIndex > totalCards - visibleCards ? prev : nextIndex;
  });
};

const handlePrev = () => {
  setCurrentIndex((prev) => {
    const prevIndex = prev - 1;
    return prevIndex < 0 ? 0 : prevIndex;
  });
};


  return (
    <section className="skills-tabs">
      <h2>Skills to transform your career and life</h2>
      <p>From critical skills to technical topics, Udemy supports your professional development.</p>

      <div className="tabs">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="courses-wrapper">

      <button
        className="nav-btn left"
        onClick={handlePrev}
        disabled={currentIndex === 0}
      >
          &#10094;
        </button>

        <div className="courses" style={{ transform: `translateX(-${currentIndex * 260}px)` }}>
          {coursesData.map((course, index) => (
            <div key={index} className="course-card">
              <img src={course.image} alt={course.title} />
              <div className="course-info">
                <h3>{course.title}</h3>
                {course.tag && (
                  <span className={`tag ${course.tag === "Bestseller" ? "best" : ""}`}>
                    {course.tag}
                  </span>
                )}
                <span className="tag">⭐ {course.rating}</span>
                <span className="tag">{course.reviews}</span>
                <p className="price">£{course.price}</p>
              </div>
            </div>
            ))}
          </div>


              <button
                className="nav-btn right"
                onClick={handleNext}
                disabled={currentIndex >= totalCards - visibleCards}
              >
            &#10095;
          </button>
        </div>

      <button className="show-all">Show all Artificial Intelligence (AI) courses →</button>
    </section>
  );
};

export default CoursesSection;