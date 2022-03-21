import React from "react";
import EducationAvatar from "../img/Education1.png";

export default function Education({ lang }) {
  const direction = lang === "Fa" ? "ltr" : "rtl";
  return (
    <React.Fragment>
      <div
        className={`${direction} p-0 m-0 position-relative top-0 left-0 w-100 d-flex flex-lg-column flex-row overflow-auto align-items-center justify-content-center d-flex`}
      >
        <div className="container row mx-auto d-flex vh-100 align-items-center">
          <div className="col col-md-8 py-4">
            {lang === "Fa" ? (
              <>
                <h2 className="fw-bolder vazir mt-4 mb-5 w-100 text-center align-items-start justify-content-center d-flex">
                  سوابق تحصیلی
                </h2>
                <div className="row resumeSection">
                  <ul className="list-group d-flex vazir pe-4">
                    <li className="list-group-item rtl bg-transparent border-0 text-end">
                      دارای مدرک کارشناسی مهندسی فناوری اطلاعات از دانشگاه پیام
                      نور چناران
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
              </>
            ) : (
              <>
                <h2 className="fw-bolder vazir mt-4 mb-5 w-100 text-center align-items-start justify-content-center d-flex">
                  Education
                </h2>
                <div className="row resumeSection">
                  <ul className="list-group d-flex vazir ps-4">
                    <li className="list-group-item bg-transparent border-0 text-start">
                      Holds a bachelor's degree in IT engineering from Payame
                      Noor Chenaran University
                    </li>
                    <li className="list-group-item bg-transparent border-0 text-start">
                      Holds a MCSA 2012 degree from the Bartar Andishan
                      Institute
                    </li>
                    <li className="list-group-item bg-transparent border-0 text-start">
                      Holds a CCNA degree from the Bartar Andishan Institute
                    </li>
                    <li className="list-group-item bg-transparent border-0 text-start">
                      Holds a CompTIA Network+ degree from Tosinso
                    </li>
                    <li className="list-group-item bg-transparent border-0 text-start">
                      HTML و CSS
                    </li>
                    <li className="list-group-item bg-transparent border-0 text-start">
                      Bootstrap
                    </li>
                    <li className="list-group-item bg-transparent border-0 text-start">
                      jQuery
                    </li>
                    <li className="list-group-item bg-transparent border-0 text-start">
                      JavaScript
                    </li>
                    <li className="list-group-item bg-transparent border-0 text-start">
                      Git
                    </li>
                    <li className="list-group-item bg-transparent border-0 text-start">
                      ES6
                    </li>
                    <li className="list-group-item bg-transparent border-0 text-start">
                      React js
                    </li>
                  </ul>
                </div>
              </>
            )}
          </div>
          <div className="col-md-4 d-none p-0 d-md-flex justify-content-center">
            <img src={EducationAvatar} width="80%" alt="" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
