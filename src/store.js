import { createStore } from 'redux';
import { moodReducer } from './reducers/moodReducer';

const store = createStore(
  moodReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
