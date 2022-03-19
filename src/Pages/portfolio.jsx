import React from "react";
import Header from "../components/header";
import { Link } from "react-router-dom";
import OtaghBazargani from "../img/OtaghBazargani.png";
import PigGame from "../img/PigGame.png";
import VidlyApp from "../img/VidlyApp.png";

const Portfolio = () => {
  return (
    <>
      <Header />
      <div className="px-0 py-5 m-0 position-relative top-0 left-0 w-100 ">
        <div className="container row mx-auto d-flex align-items-center">
          <div className="col col-md p-4">
            <div className="row resumeSection"></div>
          </div>
          <div className="col-md d-none p-4 d-md-flex justify-content-end p-0">
            <img src={OtaghBazargani} width="100%" alt="" />
          </div>
        </div>
        <hr className="text-dark w-50 mx-auto fs-2" />
        <div className="container row mx-auto py-3 d-flex align-items-center">
          <div className="col-md d-none p-4 d-md-flex justify-content-start p-0">
            <img src={PigGame} width="100%" alt="" />
          </div>
          <div className="col col-md p-4">
            <div className="row resumeSection"></div>
          </div>
        </div>
        <hr className="text-dark w-50 mx-auto fs-2" />
        <div className="container row py-3 mx-auto d-flex align-items-center">
          <div className="col col-md p-4">
            <div className="row resumeSection"></div>
          </div>
          <div className="col-md d-none p-4 d-md-flex justify-content-end p-0">
            <img src={VidlyApp} width="80%" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Portfolio;
