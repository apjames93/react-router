import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import WelcomePage from '../components/WelcomePage';
import RouteOne from '../components/RouteOne';
import RouteTwo from '../components/RouteTwo';
import RouteThree from '../components/RouteThree';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={WelcomePage} exact={true} />
        <Route path="/RouteOne" component={RouteOne} exact={true} />
        <Route path="/RouteTwo/:id" component={RouteTwo} />
        <Route path="/RouteThree" component={RouteThree} />
        <Route component={NotFoundPage} />
    </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
