import React, { Component } from 'react';
import { Grid } from 'react-flexbox-grid';
import styled from 'styled-components';
import get from '../../api';
import Name from './Name';
import Gallery from './Gallery';
import PhotosButton from './PhotosButton';
import Summary from './Summary';
import Characters from './Characters';
import Description from './Description';
import Amenities from './Amenities';
import Offers from './Offers';
import Geo from './Geo';

const Characteristics = styled.main`
  padding-top: 1.5rem;
  border-top: solid 1px #eaebf0;
`;

class Complex extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    get(`/complexes/${this.props.match.params.slug}`).then(json => this.setState({ complex: json }));
  }

  render() {
    const complex = this.state.complex;
    if (complex === undefined) {
      return null;
    }
    return (
      <Characteristics>
        <Name name={complex.name} address={complex.location} />
        <Gallery images={complex.images} name={complex.name} />
        <Grid>
          <PhotosButton images={complex.images} />
          <Summary offers={complex.statistics.propertiesCount} details={complex.details} />
        </Grid>
        <Characters
          flats={complex.units}
          details={complex.details}
          statistics={complex.statistics} />
        {complex.fullDescription && <Description text={complex.fullDescription} />}
        <Amenities amenities={complex.amenities} />
        <Offers name={complex.name} />
        <Geo
          district="Якиманка"
          tagline="Исторический центр Москвы в&nbsp;двух километрах&nbsp;от&nbsp;Кремля"
          link="Гид по Якиманке" />
      </Characteristics>
    );
  }
}

export default Complex;
