// src/components/Header.jsx
import React, { useState } from 'react';
import { headerData } from '../data/dummyData';

const Header = () => {
    const [searchQuery, setSearchQuery] = useState('');
  return (
    <header>
      <div className="offer-banner">
        <div>
          <p>{headerData.newLearnerOffer.text}
            <span className='offer-banner-extra' >{headerData.newLearnerOffer.extraText}</span>
          </p>
          <div>
            <span>{headerData.newLearnerOffer.timer}</span>
          </div>
        </div>
        <button className="redeem-btn">
            {headerData.newLearnerOffer.redeemButton}
          </button>
      </div>
      <div className="header">
        <div>
          <img src = {headerData.logo} alt = 'Udemy'/>
        </div>
        <nav className="header__nav">
          <button className="header__nav-item">
                {headerData.btn1}
          </button>
          <input
              type="text"
              placeholder={"🔍 Search for anything "}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="header__search"
            />
            {headerData.navItems.map((item, index) => (
              <button key={index} className="header__nav-item">
                {item.label}
              </button>
            ))}
            {headerData.otherbtn.map((item, index) => (
              <button key={index} className={`header__nav-item ${index === 1 ? 'signup' : 'login'}`}>
                {item.label}
              </button>
            ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;