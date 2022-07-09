import React, { useEffect } from 'react';
import { connect, MapStateToProps } from 'react-redux';
import { RootStore, userStore } from '../store';
import { login, decrement, increment, logout } from '../store/actions';
import { Dispatch } from 'redux';
import { InitUserStore } from '../store/user';
import { InitCountStore } from '../store/count';

type Props = {
  store: RootStore
  addN: (value: number) => { type: string, num: number }
}

const Test: React.FC<Props> = (props) => {
  const { store, addN} = props;
  return (
    <>
      <div>test</div>
      <div>{store.count.num}</div>
      <button onClick={()=>addN(50)}>+1</button>
    </>
  );
};

const mapStateToProps:MapStateToProps<any, any, any> = (state: RootStore) => {
  return {
    store:state
  };
};
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addN: (value: number) => dispatch(increment(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);
