import React from "react";

export default props =>
  <div className="complex-geo-nearby-item">
    <h6 className="complex-geo-nearby-place">{props.place}</h6>
    <p className="complex-geo-nearby-distance">{props.distance}</p>
  </div>