import React from 'react';
import { Grid, Row, Col } from "react-flexbox-grid";
import Offer from "./Offer";

export default () => {
  return (
    <section className="complex-offers">
      <Grid>
        <h3 className="complex-offers-title">Предложения в ЖК «Полянка/44»</h3>
        <Row>
          <Col xs={4}>
            <div className="complex-offers-card">
              <Offer
                room={1}
                space={{ min: 59, max: 120 }}
                price={{ min: 20.3, max: 84.2 }}
              />
            </div>
          </Col>
          <Col xs={4}>
            <div className="complex-offers-card">
              <Offer
                room={2}
                space={{ min: 59, max: 120 }}
                price={{ min: 20.3, max: 84.2 }}
              />
            </div>
          </Col>
          <Col xs={4}>
            <div className="complex-offers-card">
              <Offer
                room={3}
                space={{ min: 59, max: 120 }}
                price={{ min: 20.3, max: 84.2 }}
              />
            </div>
          </Col>
        </Row>
      </Grid>
    </section>
  );
};
