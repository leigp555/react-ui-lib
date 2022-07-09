export type InitUserStore = {
  user: string
  isLogin: boolean
  text: string
}
type UserAction = {
  type: string,
  isLogin: boolean,
  text: string
}

// store初始值
const initStore: InitUserStore = {
  user: 'admin',
  isLogin: false,
  text: '未登录'
};

// 创建各个操作
export const userReducer = (state = initStore, action: UserAction) => {
  switch (action.type) {
    case 'Login':
      return {
        ...state,
        isLogin: action.isLogin,
        text: action.text
      };
    case 'Logout':
      return {
        ...state,
        isLogin: action.isLogin,
        text: action.text
      };
    default:
      return state;
  }
};
