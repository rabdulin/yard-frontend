import React from 'react';
import { Grid, Col } from "react-flexbox-grid";

export default () => {
  return (
    <section className="complex-characters">
      <Grid>
        <h3 className="complex-characters-title">Характеристики</h3>
        <dl className="complex-characters-list">
          <div className="row">
            <Col xs={2}>
              <dt className="complex-characters-key">Количество квартир:</dt>
              <dt className="complex-characters-key">Статус:</dt>
              <dt className="complex-characters-key">Цены:</dt>
            </Col>
            <Col xs={2}>
              <dd className="complex-characters-value">1 503</dd>
              <dd className="complex-characters-value">Квартиры</dd>
              <dd className="complex-characters-value">от 5.3 до 143.5 млн
              </dd>
            </Col>
            <Col xs={2}>
              <dt className="complex-characters-key">Количество квартир:</dt>
              <dt className="complex-characters-key">Количество квартир:</dt>
              <dt className="complex-characters-key">Количество квартир:</dt>
            </Col>
            <Col xs={2}>
              <dd className="complex-characters-value">1 503</dd>
              <dd className="complex-characters-value">1 503</dd>
              <dd className="complex-characters-value">1 503</dd>
            </Col>
            <Col xs={2}>
              <dt className="complex-characters-key">Количество квартир:</dt>
              <dt className="complex-characters-key">Количество квартир:</dt>
              <dt className="complex-characters-key">Количество квартир:</dt>
            </Col>
            <Col xs={2}>
              <dd className="complex-characters-value">1 503</dd>
              <dd className="complex-characters-value">1 503</dd>
              <dd className="complex-characters-value">1 503</dd>
            </Col>
          </div>
        </dl>
      </Grid>
    </section>
  );
};
