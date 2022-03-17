import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/main.jsx";
import Contact from "./Pages/contact.jsx";
import Portfolio from "./Pages/portfolio.jsx";
import Resume from "./Pages/resume.jsx";
import Education from "./Pages/Education";
import Experience from "./Pages/Experience";
import Skills from "./Pages/Skills";
import "./App.css";
import "./main.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/resume" element={<Resume />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route exact path="/education" element={<Education />} />
        <Route exact path="/experience" element={<Experience />} />
        <Route exact path="/skills" element={<Skills />} />
      </Routes>
    </>
  );
}

export default App;
