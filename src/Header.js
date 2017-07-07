import React from "react";
import Logo from "./compass-logo.svg"
import { Grid } from "react-flexbox-grid";

export default () => {
  return (
    <div>
      <header className="header">
        <Grid>
            <img src={Logo} alt="" classNames="compass-logo" />
            <nav className="header-nav">
              <a className="header-nav-link" href="">Купить</a>
              <a className="header-nav-link" href="">Снять</a>
              <a className="header-nav-link" href="">Наши агенты</a>
            </nav>
        </Grid>
      </header>
    </div>
  );
};