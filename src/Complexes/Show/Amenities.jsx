import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import Amenity from './Amenity';

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

export default props =>
  (<Infrastructure>
    <Grid>
      {props.amenity && <Title>Инфраструктура</Title>}
      {props.amenity &&
        <Row>
          {props.amenities.map(amenity =>
            (<Col xs={2}>
              <Amenity amenity={amenity} />
            </Col>),
          )}
        </Row>}
    </Grid>
  </Infrastructure>);
