import React from 'react';
import { Grid, Row, Col } from "react-flexbox-grid";
import Amenity from "./Amenity";

export default () => {
  return (
    <section className="complex-amenities">
      <Grid>
        <h3 className="complex-amenities-title">Инфраструктура</h3>
        <Row>
          <Col xs={2}>
            <Amenity>Бассейн</Amenity>
            <Amenity>Частная школа</Amenity>
          </Col>
          <Col xs={2}>
            <Amenity>Детский сад</Amenity>
            <Amenity>Частная школа</Amenity>
          </Col>
          <Col xs={2}>
            <Amenity>Частная школа</Amenity>
            <Amenity>Частная школа</Amenity>
          </Col>
          <Col xs={2}>
            <Amenity>Бассейн</Amenity>
          </Col>
          <Col xs={2}>
            <Amenity>Детский сад</Amenity>
          </Col>
          <Col xs={2}>
            <Amenity>Частная школа</Amenity>
          </Col>
        </Row>
      </Grid>
    </section>
  );
};
