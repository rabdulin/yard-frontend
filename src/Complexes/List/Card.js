import React from "react";

export default props =>
  <a className="complex-card">
    <img src={process.env.PUBLIC_URL + './bitmap.jpg'} alt="" className="bitmap complex-card-img" />
    <article className="complex-card-info">
      <p className="complex-card-location">{props.location}</p>
      <h3 className="complex-card-title">{props.name}</h3>
      <p className="complex-card-description">{props.children}</p>
    </article>
  </a>