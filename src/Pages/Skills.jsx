import React from "react";
import Header from "../components/header";
import SkillsAvatar from "../img/SkillsAvatar.svg";

export default function Skills() {
  return (
    <React.Fragment>
      <Header />
      <div className="head p-0 m-0 position-relative top-0 left-0 w-100 d-flex flex-lg-column flex-row overflow-auto align-items-center justify-content-center d-flex">
        <div className="container row mx-auto d-flex my-5 align-items-center">
          <div className="col text-center">
            <h2 className="fw-bolder vazir mt-4 mb-5 w-100 text-center align-items-start justify-content-center d-flex">
              توانایی ها
            </h2>
            <ul className="list-group d-flex vazir flex-md-wrap">
              <li className="list-group-item rtl  bg-transparent border-0 text-center">
                آشنایی با ویندوز سرور 2019 و 2016
              </li>
              <li className="list-group-item rtl  bg-transparent border-0 text-center">
                آشنایی با شبکه های کامپیوتری و تسلط به راه اندازی شبکه
              </li>
              <li className="list-group-item rtl  bg-transparent border-0 text-center">
                آشنایی با وردپرس
              </li>
              <li className="list-group-item rtl  bg-transparent border-0 text-center">
                آشنایی با JavaScript
              </li>
              <li className="list-group-item rtl  bg-transparent border-0 text-center">
                آشنایی با ES6
              </li>
              <li className="list-group-item rtl  bg-transparent border-0 text-center">
                آشنایی با jQuery
              </li>
              <li className="list-group-item rtl  bg-transparent border-0 text-center">
                مسلط به HTML و CSS و Bootstrap
              </li>
              <li className="list-group-item rtl  bg-transparent border-0 text-center">
                آشنایی با Git
              </li>
            </ul>
            <ul className="list-group d-flex vazir flex-md-wrap">
              <li className="list-group-item rtl  bg-transparent border-0 text-center">
                آشنایی با Laravel
              </li>
              <li className="list-group-item rtl  bg-transparent border-0 text-center">
                آشنایی با PHPStorm
              </li>
              <li className="list-group-item rtl  bg-transparent border-0 text-center">
                آشنایی با PhpMyAdmin
              </li>
              <li className="list-group-item rtl  bg-transparent border-0 text-center">
                آشنایی با React js
              </li>
              <li className="list-group-item rtl  bg-transparent border-0 text-center">
                آشنایی با مدل MVC
              </li>
              <li className="list-group-item rtl  bg-transparent border-0 text-center">
                آشنایی با VSCode
              </li>
              <li className="list-group-item rtl  bg-transparent border-0 text-center">
                آشنایی با Sass
              </li>
              <li className="list-group-item rtl  bg-transparent border-0 text-center">
                متعهد به نظم سازمانی
              </li>
              <li className="list-group-item rtl  bg-transparent border-0 text-center">
                متعهد در یادگیری مطالب و بکارگیری آنها در جهت پیشرفت سازمان
              </li>
              <li className="list-group-item rtl  bg-transparent border-0 text-center">
                دارای روحیه کار تیمی
              </li>
              <li className="list-group-item rtl  bg-transparent border-0 text-center">
                خلاق و کوشا در حیطه کاری
              </li>
            </ul>
          </div>
          <div className="col">
            <img src={SkillsAvatar} height="80%" alt="" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
