import React from "react";
import Mjj from "../img/MJJ.png";

export default function main({ lang }) {
  const direction = lang === "Fa" ? "ltr" : "rtl";
  return (
    <React.Fragment>
      <div
        className={`${direction} p-0 m-0 position-relative top-0 left-0 w-100 d-flex flex-lg-column flex-row overflow-auto align-items-center justify-content-center d-flex`}
      >
        <div className="container row mx-auto">
          <div className="col-12 col-md d-flex order-1 order-md-0 align-items-start main justify-content-center flex-column">
            {lang === "Fa" ? (
              <>
                <h1>
                  من
                  <span id="name"> محمد جواد جهانگیری </span>
                  هستم
                </h1>
                <p>
                  پشتیبان سیستم و شبکه های کامپیوتری، با 6 سال سابقه در شرکت دنا
                  سوله ، که به دلیل علاقه به برنامه نویسی تغییر گرایش دادم و طی
                  یک سال اخیر اقدام به یادگیری برنامه نویسی کردم و زبان های سمت
                  Front-End را یاد گرفته و با PhpMyAdmin و Laravel کار کرده ام.
                </p>
              </>
            ) : (
              <>
                <h1>
                  I'm
                  <span id="name"> Mohamad Javad Jahangiri</span>
                </h1>
                <p className="subContent">
                  Computer and network support with 6 years’ experience in
                  Denasoole Company, I have changed my orientation just because
                  of my interest on programming then I do learn Front-End
                  language, basic PhpMyAdmin and Laravel.
                </p>
              </>
            )}
            {/* <div className="d-flex flex-row">
            <PageArrowLink link="/resume" classStyle="next" shape="right" />
          </div> */}
          </div>
          <div className="col-12 col-md img-fluid vh-100 order-0 order-md-1 justify-content-center px-0 d-flex">
            <img src={Mjj} className="vh-100" alt="" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
