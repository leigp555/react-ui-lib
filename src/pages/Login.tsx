import React, {
  ChangeEvent,
  createRef, FormEvent, useContext, useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../store';
import { login } from '../store/user';


const Login: React.FC = () => {
  const [user, setUser] = useState<string>('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const inputEl = createRef<HTMLInputElement>();
  const formSubmit = (e:FormEvent) => {
    e.preventDefault();
    dispatch(login(user));
    navigate('/');
  };
  return (
    <>
      <div>login</div>
      <form>
        <label htmlFor="username">
          <input ref={inputEl} type="text" name="username" value={user} onChange={(e:ChangeEvent<HTMLInputElement>)=>{setUser(e.target.value);}} />
        </label>
        <button type="submit" onClick={formSubmit}>登录</button>
      </form>
    </>
  );
};

export default Login;
