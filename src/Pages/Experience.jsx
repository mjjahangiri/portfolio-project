import React from "react";
import ExperienceAvatar from "../img/ExperienceAvatar.png";

export default function Experience({ lang }) {
  const direction = lang === "Fa" ? "" : "rtl";
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
                  سوابق کاری
                </h2>
                <div className="row textSection">
                  <ul className="list-group d-flex vazir pe-4">
                    <li className="list-group-item rtl bg-transparent border-0 text-end">
                      <h6 className="fw-bolder">
                        کارشناس IT – شرکت پلی سوله و دنا سوله - مشهد - چناران
                      </h6>
                      <ul>
                        <li>
                          پشتیبانی از شبکه،اتوماسیون،سخت افزار های شبکه، سخت
                          افزار و نرم افزار سیستم های کامپیوتری، پرینترها،
                          اسکنرها و . . .
                        </li>
                        <li>
                          راه اندازی شبکه های P2P،نگهداری و تعمیر تجهیزات سخت
                          افزاری سیستم های کامپیوتری،نصب ویندوز و نصب و پشتیبانی
                          نرم افزار های کامپیوتری و . . .
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <h2 className="fw-bolder vazir mt-4 mb-5 w-100 text-center align-items-start justify-content-center d-flex">
                  Experience
                </h2>
                <div className="row textSection">
                  <ul className="list-group d-flex vazir ps-4">
                    <li className="list-group-item bg-transparent border-0 text-start">
                      <h6 className="fw-bolder">
                        IT technician of Denasooleh company
                      </h6>
                      <ul className="ltr">
                        <li>
                          Network support, automation, network hardware,
                          hardware, software, printers, scanners and computers
                        </li>
                        <li>
                          Setting up P2P network, repair and maintenance
                          computer hardware equipment, Install windows and other
                          Software
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </>
            )}
          </div>
          <div className="col-md-4 d-none d-md-flex justify-content-end p-0">
            <img src={ExperienceAvatar} width="100%" alt="" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
