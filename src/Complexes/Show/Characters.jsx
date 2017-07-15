import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';


const Details = styled.section`
  padding-bottom: 2.5rem;
`;

const Title = styled.h3`
  margin: 0;
  margin-bottom: 1.2rem;
  padding-top: 2.2rem;
  font-family: Philosopher, sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: #3e4247;
  border-top: solid 1px #e0e0e1;
`;

const Block = styled.dl`
  display: flex;
  margin: 0;
  margin-bottom: 0.5rem;
`;

const Label = styled.dt`
  display: block;
  width: 50%;
  margin: 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.38;
  color: #a9afb6;
`;

const Value = styled.dd`
  display: block;
  width: 50%;
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.56;
  color: #3e4247;
`;


export default () => (
  <Details>
    <Grid>
      <Title>Характеристики</Title>
      <Row>
        <Col xs={4}>
          <Block>
            <Label>Количество квартир:</Label>
            <Value>1 503</Value>
          </Block>
          <Block>
            <Label>Статус:</Label>
            <Value>Квартиры</Value>
          </Block>
          <Block>
            <Label>Цены:</Label>
            <Value>от 5.3 до 143.5 млн</Value>
          </Block>
        </Col>
        <Col xs={4}>
          <Block>
            <Label>Количество квартир:</Label>
            <Value>1 503</Value>
          </Block>
          <Block>
            <Label>Количество квартир:</Label>
            <Value>1 503</Value>
          </Block>
          <Block>
            <Label>Количество квартир:</Label>
            <Value>1 503</Value>
          </Block>
        </Col>
        <Col xs={4}>
          <Block>
            <Label>Количество квартир:</Label>
            <Value>1 503</Value>
          </Block>
          <Block>
            <Label>Количество квартир:</Label>
            <Value>1 503</Value>
          </Block>
          <Block>
            <Label>Количество квартир:</Label>
            <Value>1 503</Value>
          </Block>
        </Col>
      </Row>
    </Grid >
  </Details>
);
