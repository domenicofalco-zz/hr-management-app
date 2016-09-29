/* Import CSS */
require('../less/style.less');

/*
  Import Dependencies
*/
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';

/*
  Browser History
*/
import { useRouterHistory } from 'react-router';
import { createHashHistory } from 'history'
const browserHistory = useRouterHistory(createHashHistory)({ queryKey: false })

/*
  Import Components
*/
import App from './App';
import Home from './components/Home';
import EmployeesView from './components/EmployeesView';
import PageNotFound from './components/PageNotFound';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='employees' component={EmployeesView}></Route>
      <Route path='*' component={PageNotFound} />
    </Route>
  </Router>,
  document.getElementById('app')
);
