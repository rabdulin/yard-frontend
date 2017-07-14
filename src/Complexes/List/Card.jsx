import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled(Link) `
  display: flex;
  margin-bottom: 3rem;

  background-color: #ffffff;
  border-bottom: solid 2px #646971;

  cursor: pointer;
  text-decoration: none;
    &:hover {
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);
  }
`;

const Img = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

const Info = styled.article`
  padding: 1.5rem 2rem;
  background-color: #ffffff;
`;

const Location = styled.p`
  margin: 0;
  margin-bottom: 1.5rem;

  font-family: Monaco, Menlo, Consolas, monospace;
  font-size: 16px;
  text-transform: uppercase;
  color: #646971;
`;

const Title = styled.h3`
  margin: 0;

  font-size: 40px;
  font-weight: bold;
  line-height: 1.4;
`;

const Description = styled.p`
  line-height: 1.5;
`;

export default props => (
  <Card to="/complex">
    <Img src={props.src} srcset={props.srcset} />
    <Info>
      <Location>
        {props.location}
      </Location>
      <Title>
        {props.name}
      </Title>
      <Description>
        {props.children}
      </Description>
    </Info>
  </Card>
);
