import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import { securityKinds, constructionKinds, quarters } from '../../Localization';

const Details = styled.section`
  padding-bottom: 2.5rem;
`;

const Title = styled.h3`
  margin: 0;
  margin-bottom: 1.2rem;
  padding-top: 2.2rem;
  font-family: Philosopher, sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: #3e4247;
  border-top: solid 1px #e0e0e1;
`;

const Block = styled.dl`
  display: flex;
  margin: 0;
  margin-bottom: 0.5rem;
`;

const Label = styled.dt`
  display: block;
  width: 50%;
  margin: 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.38;
  color: #a9afb6;
`;

const Value = styled.dd`
  display: block;
  width: 50%;
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.56;
  color: #3e4247;
`;


export default props => (
  <Details>
    <Grid>
      <Title>Характеристики</Title>
      <Row>
        <Col xs={4}>
          <Block>
            {props.flats && <Label>Количество квартир</Label>}
            {props.flats &&
              <Value>
                {props.flats}
              </Value>}
          </Block>
          <Block>
            <Label>Статус:</Label>
            <Value>Квартиры</Value>
          </Block>
          <Block>
            <Label>Цены:</Label>
            <Value>от {(props.statistics.price.from.rub / 1000000).toFixed(2)} до{' '}
              {(props.statistics.price.to.rub / 1000000).toFixed(2)} млн ₽</Value>
          </Block>
          <Block>
            <Label>Безопасность:</Label>
            <Value>{securityKinds[props.details.security]}</Value>
          </Block>
        </Col>
        <Col xs={4}>
          <Block>
            <Label>Конструкция корпусов:</Label>
            <Value>{constructionKinds[props.details.constructionKind]}</Value>
          </Block>
          <Block>
            <Label>Площадь:</Label>
            <Value>от {props.statistics.totalArea.from.toFixed(0)} до{' '}
              {props.statistics.totalArea.to.toFixed(0)} м²</Value>
          </Block>
          <Block>
            <Label>Высота потолков:</Label>
            <Value>{props.details.ceilHeight.from.toFixed(2)}–
              {props.details.ceilHeight.to.toFixed(2)} м</Value>
          </Block>
          <Block>
            <Label>Обслуживание:</Label>
            <Value>{props.details.maintenanceCosts} ₽ / м² / месяц</Value>
          </Block>
        </Col>
        <Col xs={4}>
          <Block>
            <Label>Начало строительства:</Label>
            <Value>{quarters[props.details.startQuarter]} квартал
              {' '} {props.details.startYear} года</Value>
          </Block>
          <Block>
            <Label>Конец строительства:</Label>
            <Value>{quarters[props.details.commissioningQuarter]} квартал
              {' '} {props.details.commissioningYear} года</Value>
          </Block>
          <Block>
            <Label>Наземная парковка:</Label>
            <Value>{props.details.parkings ? `${props.details.parkings} м/м` : 'Нет'}</Value>
          </Block>
          <Block>
            <Label>Подземная парковка:</Label>
            <Value>{props.details.undergroundGarages ? `${props.details.undergroundGarages} м/м` : 'Нет'}</Value>
          </Block>
        </Col>
      </Row>
    </Grid >
  </Details>
);
