import React from "react";
import styled from 'styled-components';


const Sight = styled.div`
  margin-right: 3rem;
`;

const Title = styled.h2`
  margin: 0;
  font-family: Philosopher, sans-serif;
  font-weight: 700;
  line-height: 1.12;
  color: #3e4247;
`;

const Subtitle = styled.small`
  display: block;
  margin-top: 0.6rem;
  font-family: 'Fira Sans', sans-serif;
  font-size: 14px;
  font-weight: 300;
  line-height: 1.57;
  color: #a9afb6;
`;

export default props =>
  <Sight>
    <Title>{props.value}
      <Subtitle>{props.label}</Subtitle>
    </Title>
  </Sight>;