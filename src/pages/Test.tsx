import React, { useEffect } from 'react';
import { connect, MapStateToProps } from 'react-redux';
import { RootStore, userStore } from '../store';
import { login, decrement, increment, logout,fuck } from '../store/actions';
import { AnyAction, Dispatch } from 'redux';

type Props = {
  store: RootStore
  addN: (value: number) =>void
  subN: (value: number) => void
  signin: () => void
  signout: () => void
  resetN: () => void
}

const Test: React.FC<Props> = (props) => {
  const { store, addN,signin,signout,resetN} = props;
  return (
    <>
      <div>test</div>
      <div>{store.count.num}</div>
      <div>{JSON.stringify(store.user)}</div>
      <button onClick={()=>addN(50)}>+1</button>
      <button onClick={()=>signin()}>+login</button>
      <button onClick={()=>signout()}>+login</button>
      <button onClick={()=>resetN()}>重置</button>
    </>
  );
};

const mapStateToProps:MapStateToProps<any,any,RootStore> = (state) => {
  return {
    store:state
  };
};
const mapDispatchToProps =  (dispatch: Dispatch) => {
  return {
    addN: (value: number) => dispatch(increment(value)),
    subN: (value: number) => dispatch(decrement(value)),
    signin:()=>dispatch(login),
    signout:()=>dispatch(logout),
    resetN:async ()=>dispatch((await fuck()) as AnyAction)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);
