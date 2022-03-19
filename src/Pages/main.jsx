import React from "react";
import { Link } from "react-router-dom";
import Mjj from "../img/MJJ.png";
import Header from "../components/header";
// import PageArrowLink from "../components/PageArrowLink";
import "./pages.css";

export default function main() {
  return (
    <React.Fragment>
      <Header />
      <div className="p-0 m-0 position-relative top-0 left-0 w-100 d-flex flex-lg-column flex-row overflow-auto align-items-center justify-content-center d-flex">
        <div className="container row mx-auto">
          <div className="col d-flex order-1 order-md-0 align-items-start headMain justify-content-center flex-column">
            <h1>
              من
              <span id="name"> محمد جواد جهانگیری </span>
              هستم
            </h1>
            <p className="subContent">
              پشتیبان سیستم و شبکه های کامپیوتری، با 6 سال سابقه در شرکت دنا
              سوله ، که به دلیل علاقه به برنامه نویسی تغییر گرایش دادم و طی یک
              سال اخیر اقدام به یادگیری برنامه نویسی کردم و زبان های سمت
              Front-End را یاد گرفته و با PhpMyAdmin و Laravel کار کرده ام.
            </p>
            {/* <div className="d-flex flex-row">
            <PageArrowLink link="/resume" classStyle="next" shape="right" />
          </div> */}
          </div>
          <div className="col vh-100 order-0 order-md-1 justify-content-center px-0 d-flex">
            <img src={Mjj} height="100%" alt="" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
