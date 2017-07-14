import React from 'react';
import styled from 'styled-components';

const Gallery = styled.div`
  display: flex;
  overflow-x: hidden;
  position: relative;
`;

export default () => (
  <Gallery>
    <img
      src={`${process.env.PUBLIC_URL}./gallery-img-1.jpg`}
      srcSet={`${process.env.PUBLIC_URL}./complex1@2x.jpg 2x, ${process.env.PUBLIC_URL}./complex1@3x.jpg 3x`}
      alt=""
    />
    <img
      src={`${process.env.PUBLIC_URL}./gallery-img-2.jpg`}
      srcSet={`${process.env.PUBLIC_URL}./complex2@2x.jpg 2x, ${process.env.PUBLIC_URL}./complex2@3x.jpg 3x`}
      alt=""
    />
    <img
      src={`${process.env.PUBLIC_URL}./gallery-img-3.jpg`}
      srcSet={`${process.env.PUBLIC_URL}./complex1@2x.jpg 2x, ${process.env.PUBLIC_URL}./complex1@3x.jpg 3x`}
      alt=""
    />
    <img
      src={`${process.env.PUBLIC_URL}./gallery-img-4.jpg`}
      srcSet={`${process.env.PUBLIC_URL}./complex1@2x.jpg 2x, ${process.env.PUBLIC_URL}./complex1@3x.jpg 3x`}
      alt=""
    />
    <img
      src={`${process.env.PUBLIC_URL}./gallery-img-5.jpg`}
      srcSet={`${process.env.PUBLIC_URL}./complex1@2x.jpg 2x, ${process.env.PUBLIC_URL}./complex1@3x.jpg 3x`}
      alt=""
    />
  </Gallery>
);
