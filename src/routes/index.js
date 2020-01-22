import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import * as C from '../constants';

const HomePage = lazy(() => import(/* webpackChunkName: 'HomePage' */ '../pages/home'));
const MoviePage = lazy(() => import(/* webpackChunkName: 'MoviePage' */ '../pages/movie'));

export default () => {
  return (
    <Suspense fallback={null}>
      <Switch>
        <Route path={C.ROUTE_HOME_PAGE} exact component={HomePage} />
        <Route path={`${C.ROUTE_MOVIE_PAGE}/:id`} exact component={MoviePage} />
        <RedirectTo redirect={C.ROUTE_HOME_PAGE} />
      </Switch>
    </Suspense>
  );
};

const RedirectTo = props => <Redirect to={props.redirect} />;
