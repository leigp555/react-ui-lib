import React, { useState } from 'react';
import styled from 'styled-components';
import MenuItem from '../lib/Menu/MenuItem';
import ItemGroup from '../lib/Menu/ItemGroup';
import Label from '../lib/Menu/Label';
import ColumnSub from '../lib/Menu/ColumnSub';
import ColumnMenu from '../lib/Menu/ColunmMenu';

const Wrap = styled.div`
  //position: relative;
  //display: flex;
  //flex-direction: column;
`;

const Home: React.FC = () => {
  const [order, setOrder] = useState<number>(1);
  return (
    <Wrap>
      <ColumnMenu defaultOrder={order} setOrder={setOrder}>
        <ColumnSub>
          <ItemGroup>
            <Label>标签1</Label>
            <MenuItem order={1}>鼠标离开</MenuItem>
            <MenuItem order={2}>反若是通</MenuItem>
          </ItemGroup>
          <ItemGroup>
            <Label>标签2</Label>
            <MenuItem order={3}>元素套一</MenuItem>
            <MenuItem order={4}>父级，那么</MenuItem>
            <MenuItem order={5}>学习总结，</MenuItem>
          </ItemGroup>
          <ItemGroup>
            <Label>标签3</Label>
            <MenuItem order={6}>反若是通</MenuItem>
            <MenuItem order={7}>和选中了。</MenuItem>
            <MenuItem order={8}>这两个兄弟</MenuItem>
          </ItemGroup>
        </ColumnSub>
      </ColumnMenu>
    </Wrap>
  );
};

export default Home;
