import React from 'react';
import { Grid, Row, Col } from "react-flexbox-grid";
import Offer from "./Offer";
import styled from 'styled-components';


const Offers = styled.section`
  padding-top: 4rem;
  padding-bottom: 3.75rem;
  background-color: #f4f5f9;
`;

const Title = styled.h3`
  margin: 0;
  margin-bottom: 1.5rem;
  font-family: Philosopher, sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.13;
  color: #3e4247;
  text-align: center;
`;

const Card = styled.div`
  padding: 1.5rem 2rem;
  background-color: #ffffff;
`;



export default () => {
  return (
    <Offers>
      <Grid>
        <Title>Предложения в ЖК «Полянка/44»</Title>
        <Row>
          <Col xs={4}>
            <Card>
              <Offer
                room={1}
                space={{ min: 59, max: 120 }}
                price={{ min: 20.3, max: 84.2 }}
              />
            </Card>
          </Col>
          <Col xs={4}>
            <Card>
              <Offer
                room={2}
                space={{ min: 59, max: 120 }}
                price={{ min: 20.3, max: 84.2 }}
              />
            </Card>
          </Col>
          <Col xs={4}>
            <Card>
              <Offer
                room={3}
                space={{ min: 59, max: 120 }}
                price={{ min: 20.3, max: 84.2 }}
              />
            </Card>
          </Col>
        </Row>
      </Grid>
    </Offers>
  );
};
