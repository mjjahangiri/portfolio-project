import React from "react";
import Header from "../components/header";
import SkillsAvatar from "../img/SkillsAvatar.svg";

export default function Skills() {
  return (
    <React.Fragment>
      <div className="p-0 m-0 position-relative top-0 left-0 w-100 d-flex flex-lg-column flex-row overflow-auto align-items-center justify-content-center d-flex">
        <div className="container row mx-auto d-flex vh-100 align-items-center">
          <div className="col col-md-8 py-5">
            <h2 className="fw-bolder vazir mt-4 mb-5 w-100 text-center align-items-start justify-content-center d-flex">
              مهارت ها
            </h2>
            <div className="row resumeSection">
              <div className="col-12 col-md rtl p-0">
                <ul className="list-group d-flex vazir">
                  <li className="list-group-item rtl  bg-transparent border-0 text-end">
                    مسلط به React js
                  </li>
                  <li className="list-group-item rtl  bg-transparent border-0 text-end">
                    مسلط به VSCode
                  </li>
                  <li className="list-group-item rtl  bg-transparent border-0 text-end">
                    مسلط به PHPStorm
                  </li>
                  <li className="list-group-item rtl  bg-transparent border-0 text-end">
                    آشنایی با وردپرس
                  </li>
                  <li className="list-group-item rtl  bg-transparent border-0 text-end">
                    آشنایی با Laravel
                  </li>
                  <li className="list-group-item rtl  bg-transparent border-0 text-end">
                    آشنایی با PhpMyAdmin
                  </li>
                  <li className="list-group-item rtl  bg-transparent border-0 text-end">
                    آشنایی با مدل MVC
                  </li>
                  <li className="list-group-item rtl  bg-transparent border-0 text-end">
                    خلاق و کوشا و دارای روحیه کار تیمی
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md rtl p-0">
                <ul className="list-group d-flex vazir ">
                  <li className="list-group-item rtl  bg-transparent border-0 text-end">
                    آشنایی با ویندوز سرور 2019 و 2016
                  </li>
                  <li className="list-group-item rtl  bg-transparent border-0 text-end">
                    آشنایی با شبکه های کامپیوتری و تسلط به راه اندازی شبکه
                  </li>
                  <li className="list-group-item rtl  bg-transparent border-0 text-end">
                    مسلط به HTML
                  </li>
                  <li className="list-group-item rtl  bg-transparent border-0 text-end">
                    مسلط به CSS و Bootstrap و Sass
                  </li>
                  <li className="list-group-item rtl  bg-transparent border-0 text-end">
                    مسلط به jQuery
                  </li>
                  <li className="list-group-item rtl  bg-transparent border-0 text-end">
                    مسلط به Git
                  </li>
                  <li className="list-group-item rtl  bg-transparent border-0 text-end">
                    مسلط به JavaScript
                  </li>
                  <li className="list-group-item rtl  bg-transparent border-0 text-end">
                    مسلط به ES6
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-none d-md-flex justify-content-end p-0">
            <img src={SkillsAvatar} width="85%" alt="" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
