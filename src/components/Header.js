import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Welcome</NavLink>
    <NavLink to="/RouteOne" activeClassName="is-active" exact={true}>RouteOne</NavLink>
    <NavLink to="/RouteThree" activeClassName="is-active">RouteThree</NavLink>
  </header>
);

export default Header;
