import React from 'react';

const RouteTwo = (props) => (
  <div>
    <h1>RouteTwo</h1>
    <p>This page is for the item with the id of {props.match.params.id}</p>
  </div>
);

export default RouteTwo;