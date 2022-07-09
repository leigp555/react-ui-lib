import { createStore, combineReducers } from 'redux';
import { countReducer } from './count';
import { userReducer } from './user';

const reducer = combineReducers({
  user: userReducer,
  count: countReducer
});

export function userStore() {
  return createStore(reducer);
}
