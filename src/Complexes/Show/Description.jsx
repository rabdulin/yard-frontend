import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';


const Description = styled.section`
  margin-bottom: 1.5rem;
`;

const Title = styled.h3`
  margin: 0;
  font-family: Philosopher, sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.12;
  color: #3e4247;
`;

const Text = styled.p`
  margin-top: 0;
  margin-bottom: 1.5rem;
  font-size: 16px;
  line-height: 1.58;
  color: #3e4247;
   &:last-child {
    margin-bottom: 0;
  }
`;

export default props => (
  <div>
    <Description>
      <Grid>
        <Row>
          <Col xs={2}>
            <Title>Описание</Title>
          </Col>
          <Col xs={10}>
            <Text>
              {props.text}
            </Text>
          </Col>
        </Row>
      </Grid>
    </Description>
  </div>
);
