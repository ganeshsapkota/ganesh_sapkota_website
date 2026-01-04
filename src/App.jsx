import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Hangman from './components/Hangman';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Hangman />} />
        </Routes>
        <footer className="simple-footer">
          <p>&copy; {new Date().getFullYear()} Ganesh Sapkota. All Rights Reserved.</p>
        </footer>

        <style>{`
          .simple-footer {
            text-align: center;
            padding: 2rem;
            border-top: 1px solid rgba(212, 175, 55, 0.1);
            color: var(--text-secondary);
            font-size: 0.8rem;
          }
        `}</style>
      </div>
    </Router>
  )
}

export default App
