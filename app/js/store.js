import { createStore } from 'redux';
import { useRouterHistory } from 'react-router';
import { createHashHistory } from 'history'
import { syncHistoryWithStore } from 'react-router-redux';
import rootReducer from './reducers';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })
const store = createStore(rootReducer)

export const history = syncHistoryWithStore(appHistory, store);
export default store;
