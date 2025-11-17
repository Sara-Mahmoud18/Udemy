import React from 'react';
import Header from './components/Header';
import Post from './components/Posts';
import AIEraSection from './components/AIEraSection';
import TrustedCompanies from './components/TrustedCompanies';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Post />
        <AIEraSection />

        <TrustedCompanies />
      </main>
    </div>
  );
}

export default App;