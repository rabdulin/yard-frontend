import React from 'react';
import styled from 'styled-components';

const Space = styled.div`
  padding: 1.5rem;
  padding-bottom: 1.57rem;
  box-sizing: border-box;
  border-bottom: solid 1px #e0e0e1;
    &:last-child {
    border-bottom: 0;
  }
`;

const Place = styled.h6`
  display: block;
  margin: 0;
  margin-bottom: 0.5rem;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.38rem;
  color: #3e4247;
`;

const Distance = styled.p`
  display: block;
  margin: 0;
  font-size: 16px;
  line-height: 1.38rem;
  color: #a9afb6;
`;

export default props => (
  <Space>
    <Place>{props.place}</Place>
    <Distance>{props.distance}</Distance>
  </Space>
);
