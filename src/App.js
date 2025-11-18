import React from 'react';
import Header from './components/Header';
import Post from './components/Posts';
import SkillsSection from './components/SkillsSection';
import AIEraSection from './components/AIEraSection';
import CoursesSection from './components/CoursesSection';
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
        <CoursesSection />
        <TrustedCompanies />
      </main>
    </div>
  );
}

export default App;