// src/components/TrustedCompanies.jsx (Corrected)
import React from 'react';
import { trustedCompaniesData } from '../data/dummyData';

const TrustedCompanies = () => {
  return (
    <section className="trusted-companies">
      <h3 className="trusted-companies__title">Trusted by over 17,000 companies and millions of learners around the world</h3>
      <div className="trusted-companies__logos">
        {trustedCompaniesData.companies.map((company, index) => (
          <div key={index} className="company-logo">
            <img src={company.url} alt={`Logo of ${company.name}`} className="company-logo__text" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustedCompanies;