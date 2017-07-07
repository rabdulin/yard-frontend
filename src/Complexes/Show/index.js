import React from "react";
import { Grid } from "react-flexbox-grid";

import Name from "./Name";
import Gallery from "./Gallery";
import PhotosButton from "./PhotosButton";
import Summary from "./Summary";
import Characters from "./Characters";
import Description from "./Description";
import Amenities from "./Amenities";
import Offers from "./Offers";
import Geo from "./Geo";

import "./complex.css";

export default () => {
  return (
    <main className="complex">
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
    </main >
  );
};
