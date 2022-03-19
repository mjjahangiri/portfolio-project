import React from "react";
import Header from "../components/header";
import EducationAvatar from "../img/Education1.png";

export default function Education() {
  return (
    <React.Fragment>
      <Header />
      <div className="p-0 m-0 position-relative top-0 left-0 w-100 d-flex flex-lg-column flex-row overflow-auto align-items-center justify-content-center d-flex">
        <div className="container row mx-auto d-flex vh-100 align-items-center">
          <div className="col col-md-8 py-4">
            <h2 className="fw-bolder vazir mt-4 mb-5 w-100 text-center align-items-start justify-content-center d-flex">
              سوابق تحصیلی
            </h2>
            <div className="row resumeSection">
              <ul className="list-group d-flex vazir">
                <li className="list-group-item rtl bg-transparent border-0 text-end">
                  دارای مدرک کارشناسی مهندسی فناوری اطلاعات از دانشگاه پیام نور
                  چناران
                </li>
                <li className="list-group-item rtl bg-transparent border-0 text-end">
                  دارای مدرک MCSA 2012 از موسسه برتراندیشان
                </li>
                <li className="list-group-item rtl bg-transparent border-0 text-end">
                  دارای مدرک CCNA از موسسه برتراندیشان
                </li>
                <li className="list-group-item rtl bg-transparent border-0 text-end">
                  دارای مدرک Comptia Network Plus ازسایت Tosinso
                </li>
                <li className="list-group-item rtl bg-transparent border-0 text-end">
                  دوره HTML و CSS
                </li>
                <li className="list-group-item rtl bg-transparent border-0 text-end">
                  دوره Bootstrap
                </li>
                <li className="list-group-item rtl bg-transparent border-0 text-end">
                  دوره jQuery
                </li>
                <li className="list-group-item rtl bg-transparent border-0 text-end">
                  دوره JavaScript
                </li>
                <li className="list-group-item rtl bg-transparent border-0 text-end">
                  دوره Git
                </li>
                <li className="list-group-item rtl bg-transparent border-0 text-end">
                  دوره ES6
                </li>
                <li className="list-group-item rtl bg-transparent border-0 text-end">
                  دوره React js
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 d-none p-0 d-md-flex justify-content-center">
            <img src={EducationAvatar} width="80%" alt="" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
