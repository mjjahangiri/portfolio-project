import React from "react";
import OtaghBazargani from "../img/OtaghBazargani.png";
import PigGame from "../img/PigGame.png";
import VidlyApp from "../img/VidlyApp.png";

export default function portfolio({ lang }) {
  const direction = lang === "Fa" ? "ltr" : "rtl";
  const textDirection = lang === "Fa" ? "rtl" : "ltr";
  return (
    <>
      <div
        className={`${direction} px-0 py-5 m-0 position-relative top-0 left-0 w-100`}
      >
        <div className="container row mx-auto d-flex align-items-center">
          <div className="col col-md p-4 order-1 order-md-0">
            <div className="row resumeSection">
              <h6
                className={`p-0 p-lg-4 ${textDirection} w-75 mx-auto text-center`}
                style={{ lineHeight: "2rem" }}
              >
                {lang === "Fa"
                  ? "این پروژه با استفاده از HTML و CSS و jQuery خام ساخته شده است و به صورت تک صفحه ای اجرا شده است. برای دیدن پروژه روی عکس کلیک کنید"
                  : "This Project is implemented with pure HTML and CSS and jQuery, and Single page Designed. for see this project click on image"}
              </h6>
            </div>
          </div>
          <div className="col-md p-4 d-flex order-0 order-md-1 justify-content-end p-0">
            <a
              href="https://mjjahangiri.github.io/Otagh-Bazargani/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="img" src={OtaghBazargani} width="100%" alt="" />
            </a>
          </div>
        </div>
        <hr className="text-dark w-50 mx-auto fs-2" />
        <div className="container row mx-auto py-3 d-flex align-items-center">
          <div className="col-md p-4 d-flex justify-content-start p-0">
            <a
              href="https://mjjahangiri.github.io/piggame/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={PigGame} className="img" width="100%" alt="" />
            </a>
          </div>
          <div className="col col-md p-4">
            <div className="row resumeSection">
              <h6
                className={`p-0 p-lg-4 ${textDirection} w-75 mx-auto text-center`}
                style={{ lineHeight: "2rem" }}
              >
                {lang === "Fa"
                  ? "این بازی با استفاده از JavaScript و Bootstrap پیاده سازی شده است. برای دیدن بازی روی عکس کلیک کنید"
                  : "This Game is implemented with JavaScript and Bootstrap. for see this game click on image"}
              </h6>
            </div>
          </div>
        </div>
        <hr className="text-dark w-50 mx-auto fs-2" />
        <div className="container row py-3 mx-auto d-flex align-items-center">
          <div className="col col-md p-4 order-1 order-md-0">
            <div className="row resumeSection">
              <h6
                className={`p-0 p-lg-4 ${textDirection} w-75 mx-auto text-center`}
                style={{ lineHeight: "2rem" }}
              >
                {lang === "Fa"
                  ? "این پروژه با استفاده از React و Bootstrap پیاده سازی شده است و برای قسمت بک اند در localhost از پکیج Json-server استفاده شده تا بتوانیم عملیات CRUD و احراز هویت راانجام دهیم. برای دیدن پروژه روی عکس کلیک کنید."
                  : "This Project is implemented with React and Bootstrap and for back-End installed Json-server package on localhost for CRUD and Authentication operation. for see this project click on image"}
              </h6>
            </div>
          </div>
          <div className="col-md p-4 d-flex order-0 order-md-1 justify-content-end p-0">
            <a
              href="https://mjjahangiri.github.io/vidly/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={VidlyApp} className="img" width="100%" alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
