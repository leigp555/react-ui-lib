import {createSlice, Draft} from '@reduxjs/toolkit'

//store的类型
export type UserStore={
  user: string
  isLogin: boolean
  text: string
}

//创建一个store切片
const userStore = createSlice({
  name: 'counter',
  initialState:()=>{
    return {
      user: 'admin',
      isLogin: false,
      text: '未登录'
    } as UserStore
  },
  reducers: {
    login: (state:Draft<UserStore>) => {
      state.isLogin=true
      state.text='已登录'
    },
    logout: (state:Draft<UserStore>) => {
      state.isLogin=false
      state.text='未登录'
    },
  }
})

//actions
export const { login, logout } = userStore.actions
export default userStore.reducer

