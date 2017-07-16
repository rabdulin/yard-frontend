import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row } from 'react-flexbox-grid';
import styled from 'styled-components';

import headerLogo from './compass-logo.svg';

const Header = styled.header`
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  background-color: #ffffff;
`;

const Logo = styled(Link) `
  height: 24px;
`;

const Nav = styled.nav`text-align: right;`;

const NavLink = styled(Link) `
  margin-right: 1.5rem;
  font-size: 1rem;
  color: #3e4247;
  text-decoration: none;

  &:last-child {
    margin-right: 0;
  }
`;

export default () =>
  (<Header>
    <Grid>
      <Row middle="xs" between="xs">
        <Logo to="/">
          <img src={headerLogo} alt="Compass" width="179px" height="24px" />
        </Logo>
        <Nav>
          <NavLink to="/">Купить</NavLink>
          <NavLink to="/">Снять</NavLink>
          <NavLink to="/">Наши агенты</NavLink>
        </Nav>
      </Row>
    </Grid>
  </Header>);
