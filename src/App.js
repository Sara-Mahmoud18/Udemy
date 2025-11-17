// src/App.jsx
import React from 'react';
import Header from './components/Header';
import TrustedCompanies from './components/TrustedCompanies';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <TrustedCompanies />
      </main>
    </div>
  );
}

export default App;