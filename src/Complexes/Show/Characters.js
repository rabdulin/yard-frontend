import React from 'react';
import { Grid, Row, Col } from "react-flexbox-grid";

export default () => {
  return (
    <section className="complex-characters">
      <Grid>
        <h3 className="complex-characters-title">Характеристики</h3>
        <Row>
          <Col xs={4}>
            <dl className="complex-characters-list">
              <dt className="complex-characters-key">Количество квартир:</dt>
              <dd className="complex-characters-value">1 503</dd>
            </dl>
            <dl className="complex-characters-list">
              <dt className="complex-characters-key">Статус:</dt>
              <dd className="complex-characters-value">Квартиры</dd>
            </dl>
            <dl className="complex-characters-list">
              <dt className="complex-characters-key">Цены:</dt>
              <dd className="complex-characters-value">от 5.3 до 143.5 млн</dd>
            </dl>
          </Col>
          <Col xs={4}>
            <dl className="complex-characters-list">
              <dt className="complex-characters-key">Количество квартир:</dt>
              <dd className="complex-characters-value">1 503</dd>
            </dl>
            <dl className="complex-characters-list">
              <dt className="complex-characters-key">Количество квартир::</dt>
              <dd className="complex-characters-value">1 503</dd>
            </dl>
            <dl className="complex-characters-list">
              <dt className="complex-characters-key">Количество квартир::</dt>
              <dd className="complex-characters-value">1 503</dd>
            </dl>
          </Col>
          <Col xs={4}>
            <dl className="complex-characters-list">
              <dt className="complex-characters-key">Количество квартир:</dt>
              <dd className="complex-characters-value">1 503</dd>
            </dl>
            <dl className="complex-characters-list">
              <dt className="complex-characters-key">Количество квартир::</dt>
              <dd className="complex-characters-value">1 503</dd>
            </dl>
            <dl className="complex-characters-list">
              <dt className="complex-characters-key">Количество квартир::</dt>
              <dd className="complex-characters-value">1 503</dd>
            </dl>
          </Col>
        </Row>
      </Grid >
    </section >
  );
};
