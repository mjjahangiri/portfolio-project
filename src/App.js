import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/main.jsx";
import Contact from "./Pages/contact.jsx";
import Portfolio from "./Pages/portfolio.jsx";
import Education from "./Pages/Education";
import Experience from "./Pages/Experience";
import Skills from "./Pages/Skills";
import NotFound from "./Pages/NotFound";
import Header from "./components/header.jsx";
import "bootstrap-icons/font/bootstrap-icons.css";

export default class App extends Component {
  state = {
    lang: "Fa",
  };

  langHandle = ({ target }) => {
    const lang = target.innerHTML;
    this.setState({ lang });
  };

  render() {
    const { lang } = this.state;
    return (
      <>
        <Header lang={lang} onClick={this.langHandle} />
        <Routes>
          <Route exact path="/" element={<Home lang={lang} />} />
          <Route
            exact
            path="/portfolio-project"
            element={<Home lang={lang} />}
          />
          <Route exact path="/contact" element={<Contact lang={lang} />} />
          <Route exact path="/portfolio" element={<Portfolio lang={lang} />} />
          <Route exact path="/education" element={<Education lang={lang} />} />
          <Route
            exact
            path="/experience"
            element={<Experience lang={lang} />}
          />
          <Route exact path="/skills" element={<Skills lang={lang} />} />
          <Route path="*" element={<NotFound lang={lang} />} />
        </Routes>
      </>
    );
  }
}
