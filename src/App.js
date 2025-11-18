import React from 'react';
import Header from './components/Header';
import Post from './components/Posts';
import SkillsSection from './components/SkillsSection';
import AIEraSection from './components/AIEraSection';
import TrustedCompanies from './components/TrustedCompanies';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Post />
        <SkillsSection />
        <AIEraSection />
        <TrustedCompanies />
      </main>
    </div>
  );
}

export default App;