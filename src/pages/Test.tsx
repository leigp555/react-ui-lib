import React, { useEffect } from 'react';
import { connect, MapStateToProps } from 'react-redux';
import { RootStore, userStore } from '../store';
import { login, decrement, increment, logout } from '../store/actions';
import { Dispatch } from 'redux';

type Props = {
  store: RootStore
  addN: (value: number) => { type: string, num: number }
  subN: (value: number) => { type: string, num: number }
  signin: () => {  type: string, isLogin: boolean, text:string}
  signout: () => {  type: string, isLogin: boolean, text:string}
}

const Test: React.FC<Props> = (props) => {
  const { store, addN,signin,signout} = props;
  return (
    <>
      <div>test</div>
      <div>{store.count.num}</div>
      <div>{JSON.stringify(store.user)}</div>
      <button onClick={()=>addN(50)}>+1</button>
      <button onClick={()=>signin()}>+login</button>
      <button onClick={()=>signout()}>+login</button>
    </>
  );
};

const mapStateToProps:MapStateToProps<any,any,RootStore> = (state) => {
  return {
    store:state
  };
};
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addN: (value: number) => dispatch(increment(value)),
    subN: (value: number) => dispatch(decrement(value)),
    signin:()=>dispatch(login),
    signout:()=>dispatch(logout)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);
