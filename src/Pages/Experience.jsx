import React from "react";
import Header from "../components/header";

export default function Experience() {
  return (
    <React.Fragment>
      <Header />
      <div className="">
        <div className="resumeContainerSection resumeContainerGroup">
          <div className=" resumeSection">
            <h5 className="resumeTitr">سوابق کاری</h5>
            <ul className="resumeList">
              <li className="resumeItem">
                <h6 className="resumeItemTitr">
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
              <li className="resumeItem">
                <h6 className="resumeItemTitr">
                  واحد نصب و پشتیبانی – شرکت هوکو - مشهد
                </h6>
                <span>
                  (مسئول طراحی سیستم های حفاظتی و دوربین مدار بسته،مسئول
                  اجرا،پشتیبانی طراحی و پیاده سازی سیستم دوربین مدار بسته پایانه
                  اتوبوس رانی،هتل ها،کارخانه ها، مکان های اداری و تجاری، طراحی و
                  پیاده سازی سیستم حفاظتی مکان های تجاری و اداری )
                </span>
              </li>
              <li className="resumeItem">
                <h6 className="resumeItemTitr">واحد نصب – شرکت فابکو – مشهد</h6>
                <span>
                  (مسئول پیاده سازی و پشتیبانی تلویزیون های شهری و تبلیغاتی
                  اجرای تلویزیون میدان ملک آباد (بزرگترین تلویزیون ایستاده شهر
                  مشهد)،اجرای تلویزیون سرزمین موج های آبی،اجرای تلویزیون های حرم
                  در موقع سال تحویل 3 سال پیاپی،اجرای تلویزیون چهارراه خیام
                  تقاطع سجاد و . . . )
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
