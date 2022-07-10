import {createSlice, configureStore, PayloadAction, Draft} from '@reduxjs/toolkit'

export type RootStore={
  num:number
}

const counterSlice = createSlice({
  name: 'counter',
  initialState:()=>{
    return {
      num: 0
    } as RootStore
  },
  reducers: {
    incremented: (state:Draft<RootStore>,action:PayloadAction<number>) => {
      state.num += action.payload
    },
    decremented: (state:Draft<RootStore>,action:PayloadAction<number>) => {
      state.num -= action.payload
    },
  }
})

//actions
export const { incremented, decremented } = counterSlice.actions

//store
export const useStore=()=>{
  return configureStore({
    reducer: counterSlice.reducer
  })
}

