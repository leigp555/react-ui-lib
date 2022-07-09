import React, { useEffect } from 'react';
import { userStore } from '../store';
import {
  multi, login, logout, decrement
} from '../store/actions';

const Test: React.FC<{}> = () => {
  const store = userStore();
  useEffect(() => {
    store.dispatch(login);
    store.dispatch(decrement);
  },[]);
  console.log(store.getState());
  return (
    <>
      <div>test</div>
    </>
  );
};

export default Test;
