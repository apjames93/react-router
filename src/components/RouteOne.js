import React from 'react';
import { Link } from 'react-router-dom';

const RouteOne = () => (
  <div>
    <p>list:</p>
    <Link to="/RouteTwo/1">Item One</Link>
    <Link to="/RouteTwo/2">Item Two</Link>
  </div>
);

export default RouteOne;