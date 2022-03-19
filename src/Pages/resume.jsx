import React from "react";
import Header from "../components/header";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const Resume = () => {
  return (
    <>
      <div className="">
        <div className="headResume">
          <Header />

          <div className=" resumeContainer">
            <div className=" resumeContainerSection align-self-center"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Resume;
