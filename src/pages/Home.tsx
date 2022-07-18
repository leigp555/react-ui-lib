import React, { useCallback } from 'react';
import styled from 'styled-components';
import Menu from '../lib/Menu/Menu ';
import MenuItem from '../lib/Menu/MenuItem';
import SubMenu from '../lib/Menu/SubMenu';
import ItemGroup from '../lib/Menu/ItemGroup';
import QQ from '../static/icons/qq.svg';
import Label from '../lib/Menu/Label';
import ColumnSub from '../lib/Menu/ColumnSub';
import ColumnMenu from '../lib/Menu/ColunmMenu';

const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border: 2px solid yellow;
`;

const Home: React.FC = () => {
  const callback = useCallback((key: number) => {
    console.log(key);
  }, []);
  return (
    <Wrap>
      <ColumnMenu callback={callback}>
        <ColumnSub>
          <MenuItem order={1}>xxx</MenuItem>
          <MenuItem order={2}>xxx</MenuItem>
          <ItemGroup label="itemGroup">
            <MenuItem order={3}>xxx</MenuItem>
            <MenuItem order={4}>xxx</MenuItem>
            <ItemGroup label="itemGroup">
              <MenuItem order={5}>xxx</MenuItem>
              <MenuItem order={6}>xxx</MenuItem>
              <MenuItem order={7}>xxx</MenuItem>
              <ItemGroup label="itemGroup">
                <MenuItem order={5}>xxx</MenuItem>
                <MenuItem order={6}>xxx</MenuItem>
                <MenuItem order={7}>xxx</MenuItem>
              </ItemGroup>
            </ItemGroup>
          </ItemGroup>
          <ItemGroup label="itemGroup">
            <MenuItem order={5}>xxx</MenuItem>
            <MenuItem order={6}>xxx</MenuItem>
            <MenuItem order={7}>xxx</MenuItem>
          </ItemGroup>
        </ColumnSub>
      </ColumnMenu>
      <Menu callback={callback}>
        <SubMenu>
          <Label>
            <QQ fill="red" width="1.1em" height="1.1em" />
            <span>导航一</span>
          </Label>
        </SubMenu>
        <SubMenu>
          <Label>导航二</Label>
          <MenuItem order={1}>xxx</MenuItem>
          <MenuItem order={2}>xxx</MenuItem>
          <MenuItem order={3}>xxx</MenuItem>
        </SubMenu>
        <SubMenu>
          <Label>导航三</Label>
          <MenuItem order={4}>xxx</MenuItem>
          <MenuItem order={5}>xxx</MenuItem>
          <MenuItem order={6}>xxx</MenuItem>
          <ItemGroup label="itemGroup">
            <MenuItem order={7}>xxx</MenuItem>
            <MenuItem order={8}>xxx</MenuItem>
            <ItemGroup label="itemGroup">
              <MenuItem order={9}>xxx</MenuItem>
              <MenuItem order={10}>xxx</MenuItem>
              <MenuItem order={11}>xxx</MenuItem>
              <MenuItem order={12}>xxx</MenuItem>
              <ItemGroup label="itemGroup">
                <MenuItem order={13}>xxx</MenuItem>
                <MenuItem order={14}>xxx</MenuItem>
                <MenuItem order={15}>xxx</MenuItem>
              </ItemGroup>
            </ItemGroup>
          </ItemGroup>
        </SubMenu>
      </Menu>
    </Wrap>
  );
};

export default Home;
