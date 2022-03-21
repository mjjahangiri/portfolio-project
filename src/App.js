import React, { Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/main.jsx";
import Contact from "./Pages/contact.jsx";
import Portfolio from "./Pages/portfolio.jsx";
import Education from "./Pages/Education";
import Experience from "./Pages/Experience";
import Skills from "./Pages/Skills";
import NotFound from "./Pages/NotFound";
import Header from "./components/header.jsx";
import "./App.css";
import "./main.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default class App extends Component {
  state = {
    lang: "Fa",
  };

  render() {
    return (
      <>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route exact path="/education" element={<Education />} />
          <Route exact path="/experience" element={<Experience />} />
          <Route exact path="/skills" element={<Skills />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    );
  }
}
