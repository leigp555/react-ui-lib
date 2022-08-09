import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Sider from '../lib/Layout/Sider';
import { ColumnMenu, ColumnSub, ItemGroup, Label, MenuItem } from '../lib';

const DocAside: React.FC = () => {
  const [order, setOrder] = useState<number>(1);
  return (
    <Sider style={{ width: '220px', backgroundColor: '#fff' }}>
      <div
        style={{
          height: '100%',
          color: '#000000d9',
          borderRight: '1px solid rgba(100,100,100,.2)'
        }}
      >
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
              <Label>简介</Label>
              <MenuItem order={1}>
                <NavLink to="button">button</NavLink>
              </MenuItem>
              <MenuItem order={2}>反若是通</MenuItem>
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
