import React from 'react';
import styled from 'styled-components';


const Banner = styled.section`
  padding-top: 5rem;
  padding-bottom: 5rem;
  background-color: #161616;
  text-align: center;
`;

export default () => (
  <Banner>
    <img alt="" src={`${process.env.PUBLIC_URL}./compass-development-logo.svg`} />
  </Banner>
);
