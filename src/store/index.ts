import {configureStore} from '@reduxjs/toolkit'
import countReducer, {CountStore} from "./count";
import userReducer, {UserStore} from './user'
import thunkMiddleware from 'redux-thunk'

export type RootStore={
  count:CountStore
  user:UserStore
}

const store=configureStore({
  reducer: {
    count:countReducer,
    user:userReducer
  },
  middleware:[thunkMiddleware ]
})
export const useStore=()=>{
  return store
}
export const selectStore = (state:RootStore) => state
export type AppDispatch = typeof store.dispatch;
