import React from "react";
import styled from 'styled-components';


const Title = styled.h4`
  margin: 0;
  font-family: Philosopher, sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.1;
  color: #3e4247;
`;

const Key = styled.small`
  display: block;
  margin: 0;
  margin-bottom: 0.6rem;
  font-size: 16px;
  line-height: 1.38;
  color: #a9afb6;
`;

const Value = styled.p`
  display: block;
  margin: 0;
  margin-top: 1.5rem;

  font-size: 16px;
  line-height: 1.38;
  color: #3e4247;
`;

const Btn = styled.button`
  display: block;
  margin: 0 auto;
  margin-top: 2.2rem;
  padding: 0.75rem 2rem;
  font-family: 'Fira Sans', sans-serif;
  font-size: 16px;
  line-height: 1.0;
  color: #ffffff;
  text-align: center;
  background-color: #000000;
  border: none;
  border-radius: 2px;
  cursor: pointer;
`;

export default props =>
  <div>
    <Title>{props.room}-комнатные квартиры</Title>
    <Value>
      <Key>Площадь</Key>от {props.space.min} до {props.space.max} м²
    </Value>
    <Value>
      <Key>Стоимость</Key>от {props.price.min} до {props.price.max} млн руб
    </Value>
    <Btn>Посмотреть предложения</Btn>
  </div>