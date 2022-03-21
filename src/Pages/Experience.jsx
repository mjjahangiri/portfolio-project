import React from "react";
import Header from "../components/header";
import ExperienceAvatar from "../img/ExperienceAvatar.png";

export default function Experience() {
  return (
    <React.Fragment>
      <div className="p-0 m-0 position-relative top-0 left-0 w-100 d-flex flex-lg-column flex-row overflow-auto align-items-center justify-content-center d-flex">
        <div className="container row mx-auto d-flex vh-100 align-items-center">
          <div className="col col-md-8 py-4">
            <h2 className="fw-bolder vazir mt-4 mb-5 w-100 text-center align-items-start justify-content-center d-flex">
              سوابق کاری
            </h2>
            <div className="row resumeSection">
              <ul className="list-group d-flex vazir">
                <li className="list-group-item rtl bg-transparent border-0 text-end">
                  <h6 className="fw-bolder">
                    کارشناس IT – شرکت پلی سوله و دنا سوله - مشهد - چناران
                  </h6>
                  <span>
                    (پشتیبانی از شبکه،اتوماسیون،سخت افزار های شبکه، سخت افزار و
                    نرم افزار سیستم های کامپیوتری، پرینترها، اسکنرها و . . . راه
                    اندازی شبکه های P2P،نگهداری و تعمیر تجهیزات سخت افزاری سیستم
                    های کامپیوتری،نصب ویندوز و نصب و پشتیبانی نرم افزار های
                    کامپیوتری و . . . )
                  </span>
                </li>
                <li className="list-group-item rtl bg-transparent border-0 text-end">
                  <h6 className="fw-bolder">
                    واحد نصب و پشتیبانی – شرکت هوکو - مشهد
                  </h6>
                  <span>
                    (مسئول طراحی سیستم های حفاظتی و دوربین مدار بسته،مسئول
                    اجرا،پشتیبانی طراحی و پیاده سازی سیستم دوربین مدار بسته
                    پایانه اتوبوس رانی،هتل ها،کارخانه ها، مکان های اداری و
                    تجاری، طراحی و پیاده سازی سیستم حفاظتی مکان های تجاری و
                    اداری )
                  </span>
                </li>
                <li className="list-group-item rtl bg-transparent border-0 text-end">
                  <h6 className="fw-bolder">واحد نصب – شرکت فابکو – مشهد</h6>
                  <span>
                    (مسئول پیاده سازی و پشتیبانی تلویزیون های شهری و تبلیغاتی
                    اجرای تلویزیون میدان ملک آباد (بزرگترین تلویزیون ایستاده شهر
                    مشهد)،اجرای تلویزیون سرزمین موج های آبی،اجرای تلویزیون های
                    حرم در موقع سال تحویل 3 سال پیاپی،اجرای تلویزیون چهارراه
                    خیام تقاطع سجاد و . . . )
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 d-none d-md-flex justify-content-end p-0">
            <img src={ExperienceAvatar} width="100%" alt="" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
