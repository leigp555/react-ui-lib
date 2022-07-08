import React, {createRef, FormEvent, useContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import {AuthContext} from "../App";

const Login: React.FC<{}> = () => {
    const [user,setUser]=useState<string>('')
    const navigate = useNavigate();
    const inputEl=createRef<HTMLInputElement>()
    const { login}=useContext(AuthContext)
    const formSubmit=(e:FormEvent)=>{
        e.preventDefault()
        login(user)
        navigate("/")
    }
    const newUser=()=>{
        setUser(()=>{
            return inputEl.current!.value
        })
    }
    return (
        <>
            <div>login</div>
            <form >
                <label htmlFor="username">
                    <input ref={inputEl} type="text" name="username" value={user} onChange={newUser}/>
                </label>
               <button type="submit" onClick={formSubmit}>登录</button>
            </form>
        </>
    )
}

export default Login
