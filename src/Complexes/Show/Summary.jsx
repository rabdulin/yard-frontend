import React from 'react';
import styled from 'styled-components';
import Sight from './SumItem';
import ruplu from 'ruplu';

const offers = ruplu(['предложение', 'предложения', 'предложений']);

const Summary = styled.section`
  display: flex;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`;

export default props =>
  (<Summary>
    {props.offers &&
      <Sight value={props.offers} label={offers(props.offers.length, true)} />}
    {props.details.architect && <Sight value={props.details.architect} label="архитектор" />}
    {props.details.developer && <Sight value={props.details.developer} label="застройщик" />}
  </Summary>);
