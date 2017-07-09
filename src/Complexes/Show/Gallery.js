import React from 'react';
import styled from 'styled-components';

const Gallery = styled.div`
  display: flex;
  overflow-x: hidden;
  position: relative;
`;

export default () => {
  return (
    <Gallery>
      <img
        src={process.env.PUBLIC_URL + './gallery-img-1.jpg'}
        srcSet={`${process.env.PUBLIC_URL + './complex1@2x.jpg'} 2x, ${process.env.PUBLIC_URL + './complex1@3x.jpg'} 3x`}
        alt=""
      />
      <img
        src={process.env.PUBLIC_URL + './gallery-img-2.jpg'}
        srcSet={`${process.env.PUBLIC_URL + './complex2@2x.jpg'} 2x, ${process.env.PUBLIC_URL + './complex2@3x.jpg'} 3x`}
        alt=""
      />
      <img
        src={process.env.PUBLIC_URL + './gallery-img-3.jpg'}
        srcSet={`${process.env.PUBLIC_URL + './complex3@2x.jpg'} 2x, ${process.env.PUBLIC_URL + './complex3@3x.jpg'} 3x`}
        alt=""
      />
      <img
        src={process.env.PUBLIC_URL + './gallery-img-4.jpg'}
        srcSet={`${process.env.PUBLIC_URL + './complex4@2x.jpg'} 2x, ${process.env.PUBLIC_URL + './complex4@3x.jpg'} 3x`}
        alt=""
      />
      <img
        src={process.env.PUBLIC_URL + './gallery-img-5.jpg'}
        srcSet={`${process.env.PUBLIC_URL + './complex5@2x.jpg'} 2x, ${process.env.PUBLIC_URL + './complex5@3x.jpg'} 3x`}
        alt=""
      />
    </Gallery>
  );
};
