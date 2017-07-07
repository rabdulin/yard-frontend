import React from 'react';
import { Grid, Row, Col } from "react-flexbox-grid";

export default () => {
  return (
    <section className="complex-description">
      <Grid>
        <Row>
          <Col xs={2}>
            <h3 className="complex-description-title">Описание</h3>
          </Col>
          <Col xs={10}>
            <p className="complex-description-text">
              ВТБ Арена Парк — современный квартал в 10 минутах езды от Кремля. Территория разделена на три зоны: жилой район, центральный стадион «Динамо» и большой спортивный парк.</p>
            <p className="complex-description-text">
              Жилой район — это 13 корпусов: апартаменты, штаб-квартира «Динамо», отель «Hyatt Regency Moscow» и четыре современных бизнес-центра. На территории — рестораны, спа-комплекс, фитнес-центр, химчистка, аптеки, магазины и отделения банков. В каждом корпусе
              работает консьерж и круглосуточная охрана. Для жителей оборудованы технические помещения под хранение колясок и велосипедов, комнаты для домашних животных и уютные вестибюли с мягкими креслами для встреч с друзьями и соседями.</p>
            <p className="complex-description-text">
              Сердце ВТБ Арена Парк — стадион. Под одной крышей расположились музей, торгово-развлекательный комплекс, подземная парковка для гостей и две крупные спортивные арены. Жизнь квартала сосредоточена в этой зоне: здесь можно сходить на концерт или фестиваль,
              поболеть за любимую команду и купить новую рубашку в торговом комплексе.</p>
            <p className="complex-description-text">
              Тихий жилой район от шумного стадиона отделяет Парк Физкультуры и Отдыха. Здесь каждый найдет занятие: для детей оборудованы игровые зоны, для подростков — спортивные площадки на открытом воздухе, для взрослых — велосипедные дорожки и зоны отдыха, где
              можно подышать свежим воздухом во время рабочего перерыва.</p>
          </Col>
        </Row>
      </Grid>
    </section>
  );
};
