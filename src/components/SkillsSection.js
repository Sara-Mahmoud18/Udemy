import React from "react";
import { skillsData } from '../data/dummyData';

const SkillsSection = () => {
  return (
    <section className="skills-section">
      <div className="skills-section__cards">
        <div className="skills-section__text">
        <h2>{skillsData.title}</h2>
        <p>
        {skillsData.description}
        </p>
        </div>
        {skillsData.categories.map((skill, index) => (
          <div key={index} className="skill-card" 
            style={{ backgroundImage: `url(${skill.image})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'
        }}>
            <div className="skill-card__info">
              <span className="skill-card__learners">👥 {skill.learners}</span>
              <h3>{skill.name}</h3>
              <span style={{ textAlign: 'right' }}>
                &#10095;
              </span>
              </div>
            </div>
        ))}
      </div>

      <div className="skills-section__pagination-wrapper">
        <button className="arrow left">&#10094;</button>
        <div className="skills-section__pagination">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <button className="arrow right">&#10095;</button>
      </div>
    </section>
  );
};

export default SkillsSection;