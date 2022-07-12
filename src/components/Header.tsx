import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { AuthContext } from './AuthProvider';


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

interface Props {
}

const Header: React.FC<Props> = () => {
  const { username, logout } = useContext(AuthContext);
  return (
    <StyledHeader>
      <nav>
        <StyledLink to="/">首页</StyledLink>
        <StyledLink to="/history">上传历史</StyledLink>
        <StyledLink to="/about">关于我</StyledLink>
        <StyledLink to="/test">测试</StyledLink>
        <StyledLink to="/ant">Ant</StyledLink>
      </nav>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        {username ? <div style={{ color: 'red' }}>{username}</div> : <div style={{ color: 'red' }}>未登录</div>}
        <StyledButton onClick={logout}>logout</StyledButton>
      </div>

    </StyledHeader>
  );
};

export default Header;
