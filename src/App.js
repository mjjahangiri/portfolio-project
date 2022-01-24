import './App.css';
import { Routes, Route } from 'react-router-dom';
import './main.css';
import React from 'react';
import Home from './Pages/main';
import Contact from './Pages/contact';
import Blog from './Pages/blog';
import Portfolio from './Pages/portfolio';
import Resume from './Pages/resume';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        {/* <Route exact path="/blog" element={<Blog />} /> */}
        <Route exact path="/resume" element={<Resume />} />
        <Route exact path="/portfolio" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
