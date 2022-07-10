import { Dispatch } from 'redux';
import axios from 'axios';

const increment = (value: number) => {
  return {
    type: 'Add',
    num: value
  };
};
const decrement = (value: number) => {
  return {
    type: 'Add',
    num: value
  };
};
const multi = {
  type: 'Multi',
  num: 2
};
const division = {
  type: 'Division',
  num: 2
};
const login = {
  type: 'Login',
  isLogin: true,
  text: '已登录'
};
const logout = {
  type: 'Logout',
  isLogin: false,
  text: '未登录'
};

const asyncAdd = () => {
  return new Promise((resolve, reject) => {
    // axios.get<number>('/xxx')
    //   .then(res => {
    //     resolve({
    //       type: 'Reset',
    //       num: res
    //     });
    //   });
    setTimeout(() => {
      resolve({
        type: 'Add',
        num: 900
      });
    },3000);
  });
};
export {
  increment, decrement, multi, division, login, logout, asyncAdd
};
