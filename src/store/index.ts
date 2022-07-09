import { createStore, combineReducers } from 'redux';
import { countReducer, InitCountStore } from './count';
import { InitUserStore, userReducer } from './user';

export type RootStore= {
  user:InitUserStore
  count:InitCountStore
}

const reducer = combineReducers({
  user: userReducer,
  count: countReducer
});

export function userStore() {
  return createStore(reducer);
}
