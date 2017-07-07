import React from 'react';
import { Grid, Row, Col } from "react-flexbox-grid";
import GeoProps from "./GeoProps"

export default () => {
  return (
    <section className="complex-geo">
      <Grid>
        <Row>
          <Col xs={6}>
            <h5 className="complex-geo-name">Якиманка</h5>
            <h2 className="complex-geo-title">Исторический центр Москвы в двух<br /> километрах от Кремля</h2>
            <a href="" className="complex-geo-link">Гид по Якиманке &#x2192;</a>
          </Col>
          <Col lg={6}>
            <img
              src={process.env.PUBLIC_URL + './polyanka-photo.jpg'}
              alt="Полянка" className="complex-geo-img" />
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <img className="complex-geo-map"
              src={process.env.PUBLIC_URL + './map.png'}
              alt="" />
          </Col>
          <Col lg={6}>
            <div className="complex-geo-nearby">
              <GeoProps place="Красный Октябрь" distance="24 минуты, 6 км" />
              <GeoProps place="World Class" distance="2 минуты, 300 м" />
              <GeoProps place="Третьяковская галерея" distance="14 минут, 4 км" />
            </div>
          </Col>
        </Row>
      </Grid>
    </section>
  );
};
