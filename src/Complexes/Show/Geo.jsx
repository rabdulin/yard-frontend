import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import GeoItem from './GeoItem';


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

export default props => (
  <Landmark>
    <Grid>
      <Row>
        <Col xs={6}>
          <Name>{props.district}</Name>
          <Title>{props.tagline}</Title>
          <LandmarkLink to="/"> {props.link} →</LandmarkLink>
        </Col>
        <Col lg={6}>
          <img
            alt=""
            src={`${process.env.PUBLIC_URL}/polyanka-photo.jpg`}
            srcSet={`${`${process.env.PUBLIC_URL}/polyanka-photo@2x.jpg`} 2x, ${`${process.env
              .PUBLIC_URL}/polyanka-photo@3x.jpg`} 3x`}
          />
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <MapImg
            alt=""
            className="sights-map"
            src={`${process.env.PUBLIC_URL}/map.png`}
            srcSet={`${`${process.env.PUBLIC_URL}/map@2x.png`} 2x, ${`${process.env
              .PUBLIC_URL}/map@3x.png`} 3x`}
          />
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
