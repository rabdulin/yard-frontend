import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

import Offer from './Offer';

const Offers = styled.section`
  padding-top: 4.1rem;
  padding-bottom: 3.75rem;
  background-color: #f4f5f9;
`;

const Title = styled.h3`
  margin: 0;
  margin-bottom: 1.55rem;
  font-family: Philosopher, sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.12;
  color: #3e4247;
  text-align: center;
`;

export default () => (
  <Offers>
    <Grid>
      <Title>Предложения в ЖК «Полянка/44»</Title>
      <Row>
        <Col xs={4}>
          <Offer
            roomsCount={1}
            area={{ min: 59, max: 120 }}
            price={{ min: 20.3, max: 84.2 }}
          />
        </Col>
        <Col xs={4}>
          <Offer
            roomsCount={2}
            area={{ min: 59, max: 120 }}
            price={{ min: 20.3, max: 84.2 }}
          />
        </Col>
        <Col xs={4}>
          <Offer
            roomsCount={3}
            area={{ min: 59, max: 120 }}
            price={{ min: 20.3, max: 84.2 }}
          />
        </Col>
      </Row>
    </Grid>
  </Offers>
);
