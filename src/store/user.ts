import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

// store的类型
export type UserStore={
  username: string
  isLogin: boolean
}
// 创建一个createSlice
const userStore = createSlice({
  name: 'user',
  initialState() {
    return {
      username: '',
      isLogin: false,
    } as UserStore;
  },
  reducers: {
    login(state:Draft<UserStore>,action:PayloadAction<string>)  {
      state.isLogin=true;
      state.username=action.payload;
    },
    logout(state:Draft<UserStore>) {
      state.isLogin=false;
      state.username='';
    },
  }
});

// 返回actions和reducer
export const { login, logout } = userStore.actions;
export default userStore.reducer;

