import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";

export default () => {
  return (
  <footer className="footer">
    <Grid>
      <Row>
        <Col xs={4}>
          <div className="footer-info">
            <h4 className="footer-info-title">ООО «Ярд»</h4>
            <p className="footer-info-text">ОГРН 1175074002531</p>
            <p className="footer-info-text">ИНН 5036165365</p>
            <p className="footer-info-text footer-info-text:last-child">+7 (999) 821-14-88</p>
          </div>
        </Col>
        <Col xs={2}>
          <div className="footer-complexes">
            <h4 className="footer-complexes-title">Жилые комплексы</h4>
            <a className="footer-complexes-link" href="">ВТБ Арена Парк</a>
            <a className="footer-complexes-link" href="">Садовые кварталы</a>
            <a className="footer-complexes-link" href="">Резиденция Монэ</a>
            <a className="footer-complexes-link footer-complexes-link:last-child" href="">Все ЖК Москвы &#x2192;</a>
          </div>
        </Col>
        <Col xs={2}>
          <div className="footer-company">
            <h4 className="footer-company-title">Компания</h4>
            <a className="footer-company-link" href="">Команда</a>
            <a className="footer-company-link" href="">О компании</a>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={8} lgOffset={4}>
          <div className="footer-disclaimer">
            <p>Любая информация, представленная на данном сайте, носит исключительно информационный характер и ни при каких
              условиях не является публичной офертой, определяемой положениями статьи 437 ГК РФ. © ООО «Ярд», 2017</p>
          </div>
        </Col>
      </Row>
    </Grid>
  </footer>
  );
};
