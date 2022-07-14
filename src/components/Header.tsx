import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { RootState, useAppDispatch, useAppSelector } from '../store';
import { logout } from '../store/user';


const StyledHeader = styled.header`
  padding: 10px 100px;
  background-color: #02101f;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const StyledLink = styled(NavLink)`
  margin-left: 30px;
  color: #fff;
  &.active {
    color: yellow;
    border-bottom: 1px solid yellow;
  }
`;
const StyledButton = styled.button`
   color: white;
  background-color: blue;
  padding: 5px;
`;

const Header: React.FC = () => {
  const user = useAppSelector((state: RootState) => state.user);
  const dispatch=useAppDispatch();
  const navigate = useNavigate();
  const signout=()=>{
    dispatch(logout());
    navigate("/login");
  };
  return (
    <StyledHeader>
      <nav>
        <StyledLink to="/">首页</StyledLink>
        <StyledLink to="/history">上传历史</StyledLink>
        <StyledLink to="/about">关于我</StyledLink>
        <StyledLink to="/test">测试</StyledLink>
      </nav>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        {user.username ? <div style={{ color: 'red' }}>{user.username}</div> : <div style={{ color: 'red' }}>未登录</div>}
        <StyledButton onClick={signout}>logout</StyledButton>
      </div>

    </StyledHeader>
  );
};

export default Header;
