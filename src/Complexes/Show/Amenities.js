import React from 'react';
import { Grid, Row, Col } from "react-flexbox-grid";
import AmenityProps from "./AmenityProps.js";

export default () => {
  return (
    <section className="complex-amenities">
      <Grid>
        <h3 className="complex-amenities-title">Инфраструктура</h3>
        <Row>
          <Col xs={2}>
            <AmenityProps>Бассейн</AmenityProps>
            <AmenityProps>Частная школа</AmenityProps>
          </Col>
          <Col xs={2}>
            <AmenityProps>Детский сад</AmenityProps>
            <AmenityProps>Частная школа</AmenityProps>
          </Col>
          <Col xs={2}>
            <AmenityProps>Частная школа</AmenityProps>
            <AmenityProps>Частная школа</AmenityProps>
          </Col>
          <Col xs={2}>
            <AmenityProps>Бассейн</AmenityProps>
          </Col>
          <Col xs={2}>
            <AmenityProps>Детский сад</AmenityProps>
          </Col>
          <Col xs={2}>
            <AmenityProps>Частная школа</AmenityProps>
          </Col>
        </Row>
      </Grid>
    </section>
  );
};
