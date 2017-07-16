import React from 'react';
import styled from 'styled-components';

const Gallery = styled.div`
  display: flex;
  overflow-x: hidden;
  position: relative;
`;

export default props =>
  (<Gallery>
    {props.images.map(image =>
      (<img
        src={`https://yard-images.s3.amazonaws.com/${image.id}-512`}
        srcSet={
          `https://yard-images.s3.amazonaws.com/${image.id}-1024 2x,` +
          `https://yard-images.s3.amazonaws.com/${image.id}-2048 3x,`
        }
        alt={props.name}
      />),
    )}
  </Gallery>
  );
