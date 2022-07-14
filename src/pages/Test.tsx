import React, { useEffect, useState } from 'react';
import {
  asyncIncrement, decremented, incremented, asyncTest
} from '../store/count';
import { login, logout } from '../store/user';
import { RootState, useAppDispatch, useAppSelector } from '../store';

type Props = {
  name:string
}

const Test: React.FC<Props> = (props) => {
  const { name }=props;
  const count = useAppSelector((state: RootState) => state.count.num);
  const user = useAppSelector((state: RootState) => state.user);
  const divRef=React.createRef<HTMLDivElement>();
  const dispatch = useAppDispatch();
  const [n,setN]=useState(0);
  const changeN=() => {
    setN(999);
    console.log(n);
  };
  useEffect(() => {
    console.log(divRef.current);
  });
  return (
    <>
      <div>{name}</div>
      <div ref={divRef}>test</div>
      <div>{count}</div>
      <div>{JSON.stringify(user)}</div>
      <button onClick={() => dispatch(incremented(50))}>+50</button>
      <button onClick={() => dispatch(decremented(100))}>-100</button>
      <button onClick={() => {
        dispatch(asyncIncrement('/test'));
      }}
      >重置
      </button>
      <button onClick={() => dispatch(asyncTest('/yyy'))}>999</button>
      <button onClick={() => dispatch(login("lgp"))}>login</button>
      <button onClick={() => dispatch(logout())}>logout</button>
      <button onClick={changeN}>测试state</button>
    </>
  );
};


Test.defaultProps={
  name: 'lgp'
};
export default Test;
