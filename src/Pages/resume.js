import React from 'react';
import Header from '../components/header';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

const Resume = () => {
  return (
    <>
      <div className="head">
        <div className="headResume">
          <Header />

          <div className=" resumeContainer">
            <div className=" resumeContainerSection align-self-center">
              <div className="resumeSection">
                <h5 className="resumeTitr">توانایی ها</h5>
                <ul className="resumeList">
                  <li className="resumeItem">
                    آشنایی به ویندوز سرور 2019 و 2016
                  </li>
                  <li className="resumeItem">
                    آشنایی با شبکه های کامپیوتری و تسلط به راه اندازی شبکه
                  </li>
                  <li className="resumeItem">آشنایی با وردپرس</li>
                  <li className="resumeItem">آشنایی با JavaScript</li>
                  <li className="resumeItem">آشنایی با ES6</li>
                  <li className="resumeItem">آشنایی با jQuery</li>
                  <li className="resumeItem">مسلط به HTML و CSS و Bootstrap</li>
                  <li className="resumeItem">آشنایی با Git</li>
                  <li className="resumeItem">آشنایی با Laravel</li>
                  <li className="resumeItem">آشنایی با PHPStorm</li>
                  <li className="resumeItem">آشنایی با PhpMyAdmin</li>
                  <li className="resumeItem">آشنایی با React js</li>
                  <li className="resumeItem">آشنایی با مدل MVC</li>
                  <li className="resumeItem">آشنایی با VSCode</li>
                  <li className="resumeItem">آشنایی با Sass</li>
                  <li className="resumeItem">متعهد به نظم سازمانی</li>
                  <li className="resumeItem">
                    متعهد در یادگیری مطالب و بکارگیری آنها در جهت پیشرفت سازمان
                  </li>
                  <li className="resumeItem">دارای روحیه کار تیمی</li>
                  <li className="resumeItem">خلاق و کوشا در حیطه کاری</li>
                </ul>
              </div>
            </div>
            <div className="  resumeContainerSection resumeContainerGroup">
              <div className=" resumeSection">
                <h5 className="resumeTitr">سوابق تحصیلی</h5>
                <ul className="resumeList">
                  <li className="resumeItem">
                    دارای مدرک کارشناسی مهندسی فناوری اطلاعات از دانشگاه پیام
                    نور چناران
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
                  <li className="resumeItem">
                    دوره HTML و CSS به صورت Self-study
                  </li>
                  <li className="resumeItem">
                    دوره Bootstrap به صورت self-study
                  </li>
                  <li className="resumeItem">دوره JQuery به صورت self-study</li>
                  <li className="resumeItem">
                    دوره JavaScript به صورت self-study
                  </li>
                  <li className="resumeItem">دوره Git به صورت self-study</li>
                  <li className="resumeItem">
                    دوره JavaScript به صورت self-study
                  </li>
                  <li className="resumeItem">دوره ES6 به صورت self-study</li>
                  <li className="resumeItem">
                    دوره React js به صورت self-study
                  </li>
                  <li className="resumeItem">
                    درحال یادگیری react/redux/firebase...
                  </li>
                </ul>
              </div>
              <div className=" resumeSection">
                <h5 className="resumeTitr">سوابق کاری</h5>
                <ul className="resumeList">
                  <li className="resumeItem">
                    <h6 className="resumeItemTitr">
                      کارشناس IT – شرکت پلی سوله و دنا سوله - مشهد - چناران
                    </h6>
                    <span>
                      (پشتیبانی از شبکه،اتوماسیون،سخت افزار های شبکه، سخت افزار
                      و نرم افزار سیستم های کامپیوتری، پرینترها، اسکنرها و . . .
                      راه اندازی شبکه های P2P،نگهداری و تعمیر تجهیزات سخت افزاری
                      سیستم های کامپیوتری،نصب ویندوز و نصب و پشتیبانی نرم افزار
                      های کامپیوتری و . . . )
                    </span>
                  </li>
                  <li className="resumeItem">
                    <h6 className="resumeItemTitr">
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
                  <li className="resumeItem">
                    <h6 className="resumeItemTitr">
                      واحد نصب – شرکت فابکو – مشهد
                    </h6>
                    <span>
                      (مسئول پیاده سازی و پشتیبانی تلویزیون های شهری و تبلیغاتی
                      اجرای تلویزیون میدان ملک آباد (بزرگترین تلویزیون ایستاده
                      شهر مشهد)،اجرای تلویزیون سرزمین موج های آبی،اجرای تلویزیون
                      های حرم در موقع سال تحویل 3 سال پیاپی،اجرای تلویزیون
                      چهارراه خیام تقاطع سجاد و . . . )
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <Link to="/portfolio" className="more">
            نمونه کار
          </Link> */}
        </div>
      </div>
    </>
  );
};
export default Resume;
