import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="vh-100 p-0 m-0 flex-column d-flex align-items-center justify-content-center">
      <h2 className="p-0 m-0 mb-5 d-flex">
        صفحه ای که به دنبال آن بودید پیدا نشد
      </h2>
      <div className="btn-group rtl gap-3">
        <Link to="/">
          <button className="btn btn-outline-dark">صفحه اصلی</button>
        </Link>
        <Link to="/portfolio">
          <button className="btn btn-outline-dark">نمونه کارها</button>
        </Link>
        <Link to="/skills">
          <button className="btn btn-outline-dark">مهارت ها</button>
        </Link>
        <Link to="/education">
          <button className="btn btn-outline-dark">سوابق تحصیلی</button>
        </Link>
        <Link to="/experience">
          <button className="btn btn-outline-dark">سوابق کاری</button>
        </Link>
        <Link to="/contact">
          <button className="btn btn-outline-dark">تماس با من</button>
        </Link>
      </div>
    </div>
  );
}
