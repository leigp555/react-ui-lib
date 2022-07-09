const increment=(value:number) => {
  return{
    type: 'Add',
    num: value
  }
};
const decrement=(value:number) => {
  return{
    type: 'Add',
    num: value
  }
};
const multi = {
  type: 'Multi',
  num: 2
};
const division ={
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

export {
  increment,decrement,multi,division,login,logout
};
