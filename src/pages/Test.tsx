import React, {} from 'react';
import { observer } from 'mobx-react-lite';
import useStore from '../store';

const Test:React.FC<{}> = () => {
  const { count ,auth } = useStore();
  return (
    <>
      <div>test</div>
      <div>作者：{auth.username}</div>
      <div>次数：{count.count}</div>
      <div>计算：{count.double}</div>
      <button onClick={() => count.increment()}>加一</button>
      <button onClick={() => count.decrement()}>异步减一</button>
      <button onClick={() => count.reset()}>重置</button>
    </>
  );
};

export default observer(Test);
