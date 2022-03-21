import React from "react";
import "../main.css";
import "../Pages/pages.css";
import Contact from "../img/telegram.gif";
import { MdLocationPin, MdPhoneEnabled, MdEmail } from "react-icons/md";
import {
  BsInstagram,
  BsTelegram,
  BsLinkedin,
  BsWhatsapp,
  BsGithub,
} from "react-icons/bs";
import { FiGitlab } from "react-icons/fi";
import "bootstrap/dist/css/bootstrap.css";
import Header from "../components/header";

export default function contact() {
  return (
    <>
      <div
        className="mx-auto p-0 my-0 position-relative vh-100 flex-column top-0 left-0 w-100 d-flex align-items-center justify-content-center"
        onClick={(e) => {
          document.querySelector(".subColorIcon").classList.add("hide");
        }}
      >
        <div className="contact">
          <img src={Contact} alt="contact me" />
          <h5 className="d-flex h-100 m-0 mb-3 justify-content-center text-center align-items-center">
            ایران - خراسان رضوی - مشهد - چهارراه ساجدی - فدک 17
            <MdLocationPin className="mx-2" />
          </h5>
          <h5 className="d-flex h-100 m-0 mb-3 justify-content-center align-items-center">
            0938-5656-118
            <MdPhoneEnabled className="mx-2" />
          </h5>
          <h5 className="d-flex h-100 m-0 mb-3 justify-content-center align-items-center">
            mj.jahangiri.6@gmail.com
            <MdEmail className="mx-2" />
          </h5>
          <hr className="m-0" />
          <div className="social my-3">
            <a href="https://www.instagram.com/mj.jahangiri/">
              <BsInstagram />
            </a>
            <a href="https://t.me/mjjahangiri">
              <BsTelegram />
            </a>
            <a href="https://www.linkedin.com/in/mohammad-javad-jahangiri-399003216">
              <BsLinkedin />
            </a>
            <a href="https://wa.me/989385656118">
              <BsWhatsapp />
            </a>
            <a href="https://github.com/mjjahangiri">
              <BsGithub />
            </a>
            <a href="https://gitlab.com/mj.jahangiri.6">
              <FiGitlab />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
