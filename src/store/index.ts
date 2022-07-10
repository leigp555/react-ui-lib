import {configureStore} from '@reduxjs/toolkit'
import {countStore} from "./count";

export type RootStore={
  num:number
}

//store
export const useStore=()=>{
  return configureStore({
    reducer: countStore.reducer
  })
}

