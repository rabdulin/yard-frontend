import React from 'react';
import { Grid, Row } from "react-flexbox-grid";

export default () => {
  return (
    <Grid>
    <Row between="xs">
      <div className="complex-location">
        <h1 className="complex-name">Жилой комплекс «Полянка/44»</h1>
        <p className="complex-address">Район Якиманка, улица Большая Полянка, дом 44 • 119180</p>
      </div>
      <button className="favorites-button">В избранное</button>
    </Row>
    </Grid>
  );
};
