import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from "react-flexbox-grid";
import GeoItem from "./GeoItem"
import styled from 'styled-components';


const Landmark = styled.section`
  padding-top: 4rem;
  padding-bottom: 13.5rem;
  margin-bottom: 13.5rem;
  background-color: #3e4247;
  color: #ffffff;
`;

const Name = styled.h5`
  margin: 0;
  margin-top: 7.45rem;
  margin-bottom: 3.1rem;
  font-family: Philosopher, sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: #a9afb6;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 3.2rem;
  font-family: Philosopher, sans-serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.25;
  color: #ffffff;
`;

const LandmarkLink = styled(Link) `
  font-family: 'Fira Sans', sans-serif;
  font-size: 16px;
  color: #00779a;
  text-decoration: none;
`;

const MapImg = styled.img`
  position: absolute;
  margin-top: 3.8rem;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);
`;

const Nearby = styled.div`
  position: absolute;
  width: 583px;
  margin-top: 3.8rem;
  background-color: #ffffff;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);
`;

export default () => {
  return (
    <Landmark>
      <Grid>
        <Row>
          <Col xs={6}>
            <Name>Якиманка</Name>
            <Title>Исторический центр Москвы в двух<br /> километрах от Кремля</Title>
            <LandmarkLink to="/">Гид по Якиманке &#x2192;</LandmarkLink>
          </Col>
          <Col lg={6}>
            <img
              src={process.env.PUBLIC_URL + './polyanka-photo.jpg'}
              alt="Полянка" />
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <MapImg
              src={process.env.PUBLIC_URL + './map.png'}
              alt="" />
          </Col>
          <Col lg={6}>
            <Nearby>
              <GeoItem place="Красный Октябрь" distance="24 минуты, 6 км" />
              <GeoItem place="World Class" distance="2 минуты, 300 м" />
              <GeoItem place="Третьяковская галерея" distance="14 минут, 4 км" />
            </Nearby>
          </Col>
        </Row>
      </Grid>
    </Landmark>
  );
};
