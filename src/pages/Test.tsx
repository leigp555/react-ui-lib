import React from 'react';
import {connect, MapStateToProps} from 'react-redux';

import {RootStore} from "../store";
import {Dispatch} from "redux";
import {decremented, incremented} from "../store/count";
import {login, logout} from "../store/user";

type Props = {
    store: RootStore
    addN: (value: number) => void
    subN: (value: number) => void
    signin:()=>void
    signout:()=>void
}

const Test: React.FC<Props> = (props) => {
    const {store, addN, subN,signin,signout} = props;
    console.log(store)
    return (
        <>
            <div>test</div>
            <div>{store.count.num}</div>
            <div>{JSON.stringify(store.user)}</div>
            <button onClick={() => addN(50)}>+50</button>
            <button onClick={() => subN(100)}>-100</button>
            <button onClick={() => signin()}>login</button>
            <button onClick={() => signout()}>logout</button>
        </>
    );
};

const mapStateToProps: MapStateToProps<any, any, RootStore> = (state) => {
    return {
        store: state
    };
};
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addN: (value: number) => dispatch(incremented(value)),
        subN: (value: number) => dispatch(decremented(value)),
        signin: () => dispatch(login()),
        signout: () => dispatch(logout()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);
