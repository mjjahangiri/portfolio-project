import React from "react";
import { Link } from "react-router-dom";

export default function PageArrowLink({ classStyle, link, shape }) {
  return (
    <Link to={link} className={`${classStyle} d-flex text-reset mx-3`}>
      <i class="bi bi-dash-lg"></i>
      <i id="arrow" className={`bi bi-arrow-${shape}`}></i>
    </Link>
  );
}
