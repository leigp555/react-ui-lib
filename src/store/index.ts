import { createContext, useContext } from 'react';
import count from './count';
import auth from './auth';

class RootStore {
  count = count;
  auth = auth;
}

const store = new RootStore();
// 创建一个上下文
const Context = createContext(store);

// 自定义一个hook使用这个上下文
export default function useStore() {
  return useContext(Context);
}
