import React from 'react';
import { asyncIncrement, decremented, incremented, } from '../store/count';
import { login, logout } from '../store/user';
import { RootState, useAppDispatch, useAppSelector } from '../store';

type Props = {}

const Test: React.FC<Props> = (props) => {
  const count = useAppSelector((state: RootState) => state.count.num);
  const user = useAppSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();
  return (
    <>
      <div>test</div>
      <div>{count}</div>
      <div>{JSON.stringify(user)}</div>
      <button onClick={() => dispatch(incremented(50))}>+50</button>
      <button onClick={() => dispatch(decremented(100))}>-100</button>
      <button onClick={() => {
        dispatch(asyncIncrement("/test"));
      }}>重置
      </button>
      <button onClick={() => dispatch(login())}>login</button>
      <button onClick={() => dispatch(logout())}>logout</button>
    </>
  );
};

export default Test;
