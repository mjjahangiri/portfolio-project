import React from 'react';
import './pages.css';
import Mjj from '../img/MJJ.png';
import Header from '../components/header';
import { Link } from 'react-router-dom';

export default function main() {
  return (
    <React.Fragment>
      <Header />
      <div className="head">
        <div className="headMain">
          {/* <div className="headText"> */}
          <h1>
            من
            <span id="name"> محمد جواد جهانگیری </span>
            هستم
          </h1>
          <h4 className="subContent">
            لیسانس مهندسی فناوری اطلاعات و برنامه نویس فرانت-اند با کمتر از یک
            سال سابقه کار اما با انگیزه فراوان برای یادگیری و بهبود دانش
          </h4>

          <Link to="/resume" className="more">
            رزومه
          </Link>
        </div>
        <img src={Mjj} height="100%" alt="" />
        {/* </div> */}
      </div>
    </React.Fragment>
  );
}
