import React from "react";

export default props =>
  <div className="complex-summary-item">
    <h2 className="complex-summary-title">{props.value}<small className="complex-summary-subtitle">{props.label}</small></h2>
  </div>;