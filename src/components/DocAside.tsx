import React, { useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Sider from '../lib/Layout/Sider';
import { ColumnMenu, ColumnSub, ItemGroup, Label, MenuItem } from '../lib';

const NavLinkP = styled(NavLink)`
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  transition: all 250ms;
  font-size: 14px;
  color: #000000d9;
  &.active {
    color: #1890ff;
    border-right: 3px solid #1890ff;
  }
  &:hover {
    color: #1890ff;
  }
`;

const DocAside: React.FC = () => {
  const initLink = useRef<HTMLAnchorElement | null>(null);
  const location = useLocation();
  useEffect(() => {
    const pathArr = location.pathname.split('/');
    const mathStr = pathArr[pathArr.length - 1];
    if (mathStr === 'docs') {
      initLink.current?.click();
    }
  }, []);
  return (
    <Sider>
      <ColumnMenu
        style={{
          width: '220px',
          height: '100%'
        }}
      >
        <ColumnSub>
          <ItemGroup>
            <Label>快速上手</Label>
            <MenuItem order={1}>
              <NavLinkP to="intro" ref={initLink}>
                简介
              </NavLinkP>
            </MenuItem>
            <MenuItem order={1}>
              <NavLinkP to="install">安装</NavLinkP>
            </MenuItem>

            <MenuItem order={1}>
              <NavLinkP to="usage">如何使用</NavLinkP>
            </MenuItem>
          </ItemGroup>
        </ColumnSub>
      </ColumnMenu>
    </Sider>
  );
};

export default DocAside;
