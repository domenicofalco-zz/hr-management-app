/* Import CSS */
require('../less/style.less');

/*
  Import Dependencies
*/
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import 'babel-polyfill';


/*
  Data store
*/

import store, { history } from './store';

/*
  Import Components
*/
import App from './components/App';
import Home from './components/Home';
import EmployeesView from './components/EmployeesView';
import PageNotFound from './components/PageNotFound';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='employees' component={EmployeesView} />
        <Route path='*' component={PageNotFound} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
