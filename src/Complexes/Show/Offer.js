import React from "react";

export default props =>
  <div>
    <h4 className="complex-offers-card-title">{props.room}-комнатные квартиры</h4>
    <p className="complex-offers-card-value">
      <small className="complex-offers-card-key">Площадь</small>от {props.space.min} до {props.space.max} м²</p>
    <p className="complex-offers-card-value">
      <small className="complex-offers-card-key">Стоимость</small>от {props.price.min} до {props.price.max} млн руб</p>
    <button className="complex-offers-card-button">Посмотреть предложения</button>
  </div>