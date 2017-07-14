import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';


const Infrastructure = styled.section`
  padding-bottom: 3.5rem;
`;

const Title = styled.h3`
  margin: 0;
  margin-bottom: 0.9rem;
  padding-top: 2.15rem;
  font-family: Philosopher, sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.12;
  color: #3e4247;
  border-top: solid 1px #eaebf0;
`;

const Facility = styled.div`
  margin-bottom: 0.5rem;
  font-size: 16px;
  line-height: 1.38;
  color: #3e4247;
`;

export default () => (
  <Infrastructure>
    <Grid>
      <Title>Инфраструктура</Title>
      <Row>
        <Col xs={2}>
          <Facility>Бассейн</Facility>
          <Facility>Частная школа</Facility>
        </Col>
        <Col xs={2}>
          <Facility>Детский сад</Facility>
          <Facility>Частная школа</Facility>
        </Col>
        <Col xs={2}>
          <Facility>Частная школа</Facility>
          <Facility>Частная школа</Facility>
        </Col>
        <Col xs={2}>
          <Facility>Бассейн</Facility>
        </Col>
        <Col xs={2}>
          <Facility>Детский сад</Facility>
        </Col>
        <Col xs={2}>
          <Facility>Частная школа</Facility>
        </Col>
      </Row>
    </Grid>
  </Infrastructure>
);
