import React from "react";
import styled from 'styled-components';

const Facility = styled.div`
  margin-bottom: 0.5rem;
  font-size: 16px;
  line-height: 1.38;
  color: #3e4247;
`;

export default props =>
  <Facility>
    {props.children}
  </Facility>;
