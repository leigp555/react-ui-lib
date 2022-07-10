import {configureStore} from '@reduxjs/toolkit'
import countReducer, {CountStore} from "./count";
import userReducer, {UserStore} from './user'

export type RootStore={
  count:CountStore
  user:UserStore
}

//store
export const useStore=()=>{
  return configureStore({
    reducer: {
      count:countReducer,
      user:userReducer
    }
  })
}

