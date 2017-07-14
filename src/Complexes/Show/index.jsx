import React from 'react';
import { Grid } from 'react-flexbox-grid';
import styled from 'styled-components';

import Name from './Name';
import Gallery from './Gallery';
import PhotosButton from './PhotosButton';
import Summary from './Summary';
import Characters from './Characters';
import Description from './Description';
import Amenities from './Amenities';
import Offers from './Offers';
import Geo from './Geo';

import './complex.css';

const Complex = styled.main`
  padding-top: 1.5rem;
  border-top: solid 1px #eaebf0;
`;

export default () => (
  <Complex>
    <Name />
    <Gallery />
    <Grid>
      <PhotosButton />
      <Summary />
    </Grid>
    <Characters />
    <Description />
    <Amenities />
    <Offers />
    <Geo />
  </Complex>
);
