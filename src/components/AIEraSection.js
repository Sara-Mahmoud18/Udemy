import React from 'react';
import { aiEraData } from '../data/dummyData';

const AIEraSection = () => {
  return (
    <section className="ai-era-section" style={{ backgroundImage: `url(${aiEraData.image})` }}>
      <h2 className="ai-era-section__title">{aiEraData.title}</h2>
      <p className="ai-era-section__description">{aiEraData.description}</p>
      
      <div className="ai-era-section__features">
        {aiEraData.features.map((feature, index) => (
          <div key={index}>
            <span>{feature.label}</span>
          </div>
        ))}
      </div>      
      <div>
        <button className="ai-era-section__cta-btn">
          {aiEraData.ctaButton}
        </button>
        <p className="ai-era-section__pricing">{aiEraData.pricing}</p>
      </div>
    </section>
  );
};

export default AIEraSection;