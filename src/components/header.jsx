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
import Menu from "../img/Menu.svg";
import "./header.css";

export default function header() {
  return (
    <React.Fragment>
      <div
        className="menu"
        id="menu"
        onMouseOver={(e) => {
          document.getElementById("mainMenu").classList.remove("hide");
        }}
        onMouseOut={(e) => {
          document.getElementById("mainMenu").classList.add("hide");
        }}
      >
        <span href="#" className="menuToggleLink">
          <img
            src={Menu}
            className="bi-list p-1"
            height="40"
            width="40"
            alt=""
          />
        </span>

        <ul className="mainMenu hide" id="mainMenu">
          <li>
            <Link to="/">
              <img src={Home} height="25" width="25" alt="" />
            </Link>
          </li>
          <h4 className="menuLabel">صفحه اصلی</h4>
          <li>
            <Link to="/resume">
              <img src={Resume} height="25" width="25" alt="" />
            </Link>
          </li>
          <h4 className="menuLabel">رزومه</h4>
          <li>
            <Link to="/portfolio">
              <img src={Portfolio} height="25" width="25" alt="" />
            </Link>
          </li>
          <h4 className="menuLabel">نمونه کارها</h4>
          <li>
            <Link to="/skills">
              <img src={Skills} height="25" width="25" alt="" />
            </Link>
          </li>
          <h4 className="menuLabel">مهارت ها</h4>
          <li>
            <Link to="/education">
              <img src={Education} height="25" width="25" alt="" />
            </Link>
          </li>
          <h4 className="menuLabel">سوابق تحصیلی</h4>
          <li>
            <Link to="/experience">
              <img src={Experience} height="25" width="25" alt="" />
            </Link>
          </li>
          <h4 className="menuLabel">سوابق کاری</h4>
          <li>
            <Link to="/contact">
              <img src={Contact} height="25" width="25" alt="" />
            </Link>
          </li>
          <h4 className="menuLabel">تماس با من</h4>
        </ul>
      </div>

      {/* <div
        className="color"
        id="color"
        onClick={(e) => {
          console.log('Clicked');
          document.querySelector('.subColorIcon').classList.toggle('hide');
        }}
      >
        <span href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-palette"
            viewBox="0 0 16 16"
          >
            <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
            <path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8zm-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7z" />
          </svg>
        </span>
      </div>
      <div className="subColorIcon hide">
        <span>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-droplet-fill colorSecondary"
              id="color-secondary"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z" />
            </svg>
          </a>
        </span>
        <span>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-droplet-fill colorPrimery"
              id="color-primery"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z" />
            </svg>
          </a>
        </span>
        <span>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-droplet-fill colorThird"
              id="color-third"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z" />
            </svg>
          </a>
        </span>
      </div> */}
    </React.Fragment>
  );
}
