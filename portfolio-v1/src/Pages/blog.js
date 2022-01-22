import React from 'react';
import Header from '../components/header';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <>
      <Header />
      <div className="head">
        <div className="headBlog">
          <h1>Blog Page</h1>
          <Link to="/contact" className="more">
            تماس با من
          </Link>
        </div>
      </div>
    </>
  );
};

export default Blog;
