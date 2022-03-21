import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.esm.js";
import { Link } from "react-router-dom";
import Home from "../img/Home.svg";
import Resume from "../img/Resume.svg";
import Portfolio from "../img/Portfolio.svg";
import Contact from "../img/Contact.svg";
import Education from "../img/Education.svg";
import Experience from "../img/Experience.svg";
import Skills from "../img/Skills.svg";
import "./header.css";

export default function header({ lang, onClick }) {
  const direction = lang === "Fa" ? "rtl" : "ltr";
  return (
    <React.Fragment>
      <div
        className={`${lang}Menu`}
        id="menu"
        onMouseOver={(e) => {
          document.getElementById("mainMenu").classList.remove("hide");
        }}
        onMouseOut={(e) => {
          document.getElementById("mainMenu").classList.add("hide");
        }}
      >
        <span href="#" className="menuToggleLink">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </span>

        <ul className={`${direction} ${lang}MainMenu hide`} id="mainMenu">
          <li>
            <Link to="/">
              <img src={Home} height="25" width="25" alt="" />
            </Link>
          </li>
          <h4 className={`${lang}MenuLabel`}>
            {lang === "Fa" ? "صفحه اصلی" : "Home"}
          </h4>
          <li>
            {lang === "Fa" ? (
              <a href="https://8pic.ir/do.php?filename=MJJResume.pdf">
                <img src={Resume} height="25" width="25" alt="" />
              </a>
            ) : (
              <a href="https://8pic.ir/do.php?filename=MJResumeEN_deef2.pdf">
                <img src={Resume} height="25" width="25" alt="" />
              </a>
            )}
          </li>
          <h4 className={`${lang}MenuLabel`}>
            {lang === "Fa" ? "دانلود رزومه" : "Resume Download"}
          </h4>
          <li>
            <Link to="/portfolio">
              <img src={Portfolio} height="25" width="25" alt="" />
            </Link>
          </li>
          <h4 className={`${lang}MenuLabel`}>
            {lang === "Fa" ? "نمونه کارها" : "Portfolio"}
          </h4>
          <li>
            <Link to="/skills">
              <img src={Skills} height="25" width="25" alt="" />
            </Link>
          </li>
          <h4 className={`${lang}MenuLabel`}>
            {lang === "Fa" ? "مهارت ها" : "Skills"}
          </h4>
          <li>
            <Link to="/education">
              <img src={Education} height="25" width="25" alt="" />
            </Link>
          </li>
          <h4 className={`${lang}MenuLabel`}>
            {lang === "Fa" ? "سوابق تحصیلی" : "Education"}
          </h4>
          <li>
            <Link to="/experience">
              <img src={Experience} height="25" width="25" alt="" />
            </Link>
          </li>
          <h4 className={`${lang}MenuLabel`}>
            {lang === "Fa" ? "سوابق کاری" : "Experience"}
          </h4>
          <li>
            <Link to="/contact">
              <img src={Contact} height="25" width="25" alt="" />
            </Link>
          </li>
          <h4 className={`${lang}MenuLabel`}>
            {lang === "Fa" ? "تماس با من" : "Contact Me"}
          </h4>
        </ul>
      </div>

      <div
        className={`${lang}Lang`}
        id="lang"
        onMouseOver={(e) => {
          document.getElementById("langMenu").classList.remove("hide");
        }}
        onMouseOut={(e) => {
          document.getElementById("langMenu").classList.add("hide");
        }}
      >
        <ul className={`${lang}LangMenu hide`} id="langMenu">
          <li>
            <Link to onClick={onClick}>
              En
            </Link>
          </li>
          <li>
            <Link to onClick={onClick}>
              Fa
            </Link>
          </li>
        </ul>
        <span href="#" className="langToggleLink">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-globe"
            viewBox="0 0 16 16"
          >
            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
          </svg>
        </span>
      </div>
    </React.Fragment>
  );
}
