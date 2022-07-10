import React from 'react';
import { connect, MapStateToProps } from 'react-redux';

import {decremented, incremented, RootStore} from "../store";
import {Dispatch} from "redux";

type Props = {
  store: RootStore
  addN: (value:number) =>void
  subN: (value:number) => void
}

const Test: React.FC<Props> = (props) => {
  const { store, addN,subN} = props;
  return (
    <>
      <div>test</div>
        <div>{store.num}</div>
      <button onClick={()=>addN(50)}>+50</button>
      <button onClick={()=>subN(100)}>-100</button>
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
    addN: (value:number) => dispatch(incremented(value)),
    subN: (value:number) => dispatch(decremented(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);
