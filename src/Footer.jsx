import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

const Footer = styled.footer`
  padding-top: 2rem;
  padding-bottom: 2rem;
  background-color: #111111;
  color: #a9afb6;
`;

const Title = styled.h4`
  margin: 0;
  margin-bottom: 1rem;
  font-size: 14px;
  font-weight: bold;
  color: #646971;
`;

const Text = styled.p`
  font-size: 14px;
  font-weight: 300;
  color: #a9afb6;

  &:last-child {
    margin-top: 1.5rem;
  }
`;

const Nav = styled.nav`
  padding-top: 1rem;
  border-top: solid 2px #3e4247;
`;

const NavLink = styled(Link) `
  display: block;
  margin-bottom: 1rem;
  font-size: 14px;
  font-weight: 300;
  color: #ffffff;
  text-decoration: none;
`;

const LastNavLink = styled(Link) `
  display: block;
  margin-bottom: 1rem;
  font-size: 14px;
  font-weight: 300;
  color: #ffffff;
  text-decoration: none;
    margin-top: 1.7rem;
`;

const Disclaimer = styled.p`
  font-size: 11px;
  font-weight: 300;
  line-height: 1.5;
  color: #a9afb6;
  padding-top: 4.3rem;
`;


export default () =>
  (<Footer>
    <Grid>
      <Row>
        <Col xs={4}>
          <Title>ООО «Ярд»</Title>
          <Text>ОГРН 1175074002531</Text>
          <Text>ИНН 5036165365</Text>
          <Text>+7 (999) 821-14-88</Text>
        </Col>
        <Col xs={2}>
          <Nav>
            <Title>Жилые комплексы</Title>
            <NavLink to="/">ВТБ Арена Парк</NavLink>
            <NavLink to="/">Садовые кварталы</NavLink>
            <NavLink to="/">Резиденция Монэ</NavLink>
            <LastNavLink to="/">Все ЖК Москвы &#x2192;</LastNavLink>
          </Nav>
        </Col>
        <Col xs={2}>
          <Nav>
            <Title>Компания</Title>
            <NavLink to="/">Команда</NavLink>
            <NavLink to="/">О компании</NavLink>
          </Nav>
        </Col>
      </Row>
      <Row>
        <Col xs={8} lgOffset={4}>
          <Disclaimer>
            Любая информация, представленная на данном сайте, носит исключительно
 информационный характер и ни при каких условиях не является публичной офертой,
 определяемой положениями статьи 437 ГК РФ. © ООО «Ярд», 2017
          </Disclaimer>
        </Col>
      </Row>
    </Grid>
  </Footer>);

