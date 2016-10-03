import { createStore } from 'redux';

import uploadJson from './reducers/uploadJson';

const store = createStore(uploadJson);

export default store;
