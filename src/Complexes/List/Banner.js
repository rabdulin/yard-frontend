import React from "react";
import { Row, Col } from "react-flexbox-grid";
import styled from 'styled-components';

const Title = styled.h2`
  margin: 0;

  font-size: 24px;
  font-weight: bold;
  color: #3e4247;
`;

const Text = styled.p`
  margin-bottom: 1rem;
  line-height: 1.5;
`;

const Btn = styled.button`
  padding: 0.75rem 2rem;
  margin-bottom: 4rem;

  font-family: 'Fira Sans', sans-serif;
  font-size: 16px;
  line-height: 1.0;
  color: #ffffff;
  text-align: center;

  background-color: #000000;
  border: none;
  border-radius: 2px;
  cursor: pointer;
`;

export default () => {
  return (
    <Row center="xs">
      <Col xs={8}>
        <Title>Discover Our New Developments</Title>
        <Text>
          Compass brings a modern approach to new development marketing and
          sales. From boutique rental conversions to luxurious ground-up
          condominiums, browse our portfolio of current offerings.
        </Text>
        <Btn>Contact the team</Btn>
      </Col>
    </Row>
  );
};
