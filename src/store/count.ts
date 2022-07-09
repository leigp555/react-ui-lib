export type InitCountStore = {
  num: number
}
export type CountAction = {
  type: string,
  num: number
}

// store初始值
const initStore: InitCountStore = { num: 100 };

// 创建各个操作
export const countReducer = (state = initStore, action: CountAction) => {
  switch (action.type) {
    case 'Add':
      return {
        ...state,
        num: state.num += action.num
      };
    case 'Decrement':
      return {
        ...state,
        num: state.num -= action.num
      };
    case 'Multi':
      return {
        ...state,
        num: state.num *= action.num
      };
    case 'Division':
      return {
        ...state,
        num: state.num /= action.num
      };
    default:
      return state;
  }
};

