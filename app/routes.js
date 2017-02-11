// @flow
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import TimerPage from './containers/TimerPage';
let home_component = HomePage;

// hack
// set route from title
if (document.title === 'Create timer') {
  home_component = TimerPage;
}

export default (
  <Route path="/" component={App}>
    <IndexRoute component={home_component} />
    <Route path="/counter" component={TimerPage} />
  </Route>
);
