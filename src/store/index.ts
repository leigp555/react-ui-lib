import { createStore, combineReducers,applyMiddleware } from 'redux';
import { countReducer, InitCountStore } from './count';
import { InitUserStore, userReducer } from './user';
import thunk from 'redux-thunk'

export type RootStore= {
  user:InitUserStore
  count:InitCountStore
}

const reducer = combineReducers({
  user: userReducer,
  count: countReducer
});

export function userStore() {
  return createStore(reducer,applyMiddleware(thunk));    //使用异步中间件
}
