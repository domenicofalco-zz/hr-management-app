/* Import CSS */
require('../less/style.less');

/*
  Import Dependencies
*/
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

/*
  Reducers
*/
import uploadJson from './reducers/uploadJson';

/*
  Data store
*/
import store from './store';

/*
  Import Components
*/
import App from './components/App';
import Home from './components/Home';
import EmployeesView from './components/EmployeesView';
import PageNotFound from './components/PageNotFound';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='employees' component={EmployeesView}></Route>
        <Route path='*' component={PageNotFound} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
