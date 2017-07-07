import React from "react";

export default () => {
  return (
    <section className="black-logo">
      <img src={process.env.PUBLIC_URL + './compass-development-logo.svg'} alt="" className="compass-development-logo" />
    </section>
  );
};
