import {createSlice,PayloadAction, Draft} from '@reduxjs/toolkit'

//store的类型
export type CountStore={
  num:number
}

//创建一个store切片
export const countStore = createSlice({
  name: 'counter',
  initialState:()=>{
    return {
      num: 0
    } as CountStore
  },
  reducers: {
    incremented: (state:Draft<CountStore>,action:PayloadAction<number>) => {
      state.num += action.payload
    },
    decremented: (state:Draft<CountStore>,action:PayloadAction<number>) => {
      state.num -= action.payload
    },
  }
})

//actions
export const { incremented, decremented } = countStore.actions

