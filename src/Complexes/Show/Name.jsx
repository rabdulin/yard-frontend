import React from 'react';
import { Grid, Row } from 'react-flexbox-grid';
import styled from 'styled-components';

const Location = styled.div`margin-bottom: 0rem;`;

const Name = styled.h1`
  margin: 0;
  font-family: 'Philosopher', sans-serif;
  font-weight: 700;
`;

const Address = styled.p`
  font-family: 'Fira Sans', sans-serif;
  font-size: 14px;
  font-weight: 300;
  line-height: 1.57;
  color: #a9afb6;
`;

const Btn = styled.button`
  align-self: flex-start;
  padding: 0.5rem 1rem;
  font-family: 'Fira Sans', sans-serif;
  font-size: 10px;
  font-weight: 300;
  line-height: 1.0;
  color: #00779a;
  text-align: center;
  background-color: #ffffff;
  border: solid 1px #e0e0e1;
  border-radius: 2px;
  cursor: pointer;
`;

export default () => (
  <Grid>
    <Row between="xs">
      <Location>
        <Name>
          Жилой комплекс «Полянка/44»
        </Name>
        <Address>
          Район Якиманка, улица Большая Полянка, дом 44 • 119180
        </Address>
      </Location>
      <Btn>В избранное</Btn>
    </Row>
  </Grid>
);
