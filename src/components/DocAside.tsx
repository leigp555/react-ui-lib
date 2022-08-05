import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Sider from '../lib/Layout/Sider';
import { ColumnMenu, ColumnSub, ItemGroup, Label, MenuItem } from '../lib';

const DocAside: React.FC = () => {
  const [order, setOrder] = useState<number>(1);
  return (
    <Sider width="15vw" justify="start" aline="start">
      <div
        style={{
          height: '100%',
          width: '100%',
          color: 'red',
          backgroundColor: 'orange'
        }}
      >
        <ColumnMenu
          defaultOrder={order}
          setOrder={setOrder}
          style={{ width: '100%', height: '100%', borderRight: 'none' }}
        >
          <ColumnSub>
            <ItemGroup>
              <Label>简介</Label>
              <MenuItem order={1}>
                <NavLink to="button">button</NavLink>
              </MenuItem>
              <MenuItem order={2}>反若是通</MenuItem>
            </ItemGroup>
            <ItemGroup>
              <Label>安装</Label>
              <MenuItem order={11}>反若是通</MenuItem>
              <MenuItem order={12}>和选中了。</MenuItem>
              <MenuItem order={13}>这两个兄弟</MenuItem>
            </ItemGroup>
          </ColumnSub>
        </ColumnMenu>
      </div>
    </Sider>
  );
};

export default DocAside;
