import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
  const [order, setOrder] = useState<number>(-1);
  return (
    <Sider>
      <ColumnMenu
        defaultOrder={order}
        setOrder={setOrder}
        style={{
          width: '100%',
          height: '100%'
        }}
      >
        <ColumnSub>
          <ItemGroup>
            <Label>快速上手</Label>
            <MenuItem order={1}>
              <NavLinkP to="intro">简介</NavLinkP>
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
