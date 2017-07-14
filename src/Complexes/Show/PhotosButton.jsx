import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  position: absolute;
  padding: 0.5rem 1rem;
  margin-top: -2.7rem;
  font-family: 'Fira Sans', sans-serif;
  font-size: 10px;
  font-weight: 300;
  line-height: 1.0;
  color: #ffffff;
  border: none;
  border-radius: 2px;
  background-color: #00779a;
`;

export default () => (
  <Btn>41 фотография</Btn>
);
