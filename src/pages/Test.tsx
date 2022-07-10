import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {decremented, incremented, resetAsync} from "../store/count";
import {login, logout} from "../store/user";
import {AppDispatch, selectStore} from "../store";

type Props = {}

const Test: React.FC<Props> = (props) => {
    const store = useSelector(selectStore);
    useEffect(()=>{
        console.log(store)
    })
    const dispatch = useDispatch<AsyncThunkAction >();
    return (
        <>
            <div>test</div>
            <div>{store.count.num}</div>
            <div>{JSON.stringify(store.user)}</div>
            <button onClick={() =>dispatch(incremented(50))}>+50</button>
            <button onClick={() => dispatch(decremented(100))}>-100</button>
            <button onClick={() =>{dispatch(resetAsync())}}>重置</button>
            <button onClick={() =>dispatch(login())}>login</button>
            <button onClick={() =>dispatch(logout())}>logout</button>
        </>
    );
};


export default Test
