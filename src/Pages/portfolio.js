import React from 'react';
import Header from '../components/header';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <>
      <div className="head">
        <div className="headPortfolio">
          <Header />
          <h1>Portfolio Page</h1>
          <Link to="/contact" className="more">
            تماس با من
          </Link>
        </div>
      </div>
    </>
  );
};
export default Portfolio;
