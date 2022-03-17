import React from "react";
import Header from "../components/header";

export default function Education() {
  return (
    <React.Fragment>
      <Header />
      <div className="head">
        <div className="resumeContainerSection resumeContainerGroup">
          <div className=" resumeSection">
            <h5 className="resumeTitr">سوابق تحصیلی</h5>
            <ul className="resumeList">
              <li className="resumeItem">
                دارای مدرک کارشناسی مهندسی فناوری اطلاعات از دانشگاه پیام نور
                چناران
              </li>
              <li className="resumeItem">
                دارای مدرک MCSA 2012 از موسسه برتراندیشان
              </li>
              <li className="resumeItem">
                دارای مدرک CCNA از موسسه برتراندیشان
              </li>
              <li className="resumeItem">
                دارای مدرکComptia Network+ ازسایت tosinso
              </li>
              <li className="resumeItem">دوره HTML و CSS به صورت Self-study</li>
              <li className="resumeItem">دوره Bootstrap به صورت self-study</li>
              <li className="resumeItem">دوره JQuery به صورت self-study</li>
              <li className="resumeItem">دوره JavaScript به صورت self-study</li>
              <li className="resumeItem">دوره Git به صورت self-study</li>
              <li className="resumeItem">دوره JavaScript به صورت self-study</li>
              <li className="resumeItem">دوره ES6 به صورت self-study</li>
              <li className="resumeItem">دوره React js به صورت self-study</li>
              <li className="resumeItem">
                درحال یادگیری react/redux/firebase...
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
