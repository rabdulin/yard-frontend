import React, { Component } from 'react';
import 'whatwg-fetch';
import get from '../../api';
import { Grid } from 'react-flexbox-grid';
import styled from 'styled-components';

import BlackLogo from './BlackLogo';
import Banner from './Banner';
import Card from './Card';
import background from './background.png';

const Cards = styled.main`
  padding-top: 4rem;
  padding-bottom: 2.8rem;
  background-image: url(${background});
  background-size: 1.25rem 0.625rem;
  background-color: #eaebf0;
`;

class Complexes extends Component {
  constructor() {
    super();
    this.state = {
      complexes: [],
    };
  }
  componentDidMount() {
    get('/complexes?filter[state]=public').then(json => this.setState({ complexes: json.items }));
  }
  render() {
    return (
      <div>
        <BlackLogo />
        <Cards>
          <Grid>
            <Banner />
            {this.state.complexes.map(complex => <Card key={complex.id} complex={complex} />)}
          </Grid>
        </Cards>
      </div>
    );
  }
}

export default Complexes;

