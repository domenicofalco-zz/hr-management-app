import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import employees from './uploadJsonReducer';
export default combineReducers({ employees, routing: routerReducer });
