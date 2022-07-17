import React from 'react';
import styled from 'styled-components';
import Dropdown from '../lib/Dropdown/Dropdown ';
import DropdownItem from '../lib/Dropdown/DropdownItem';
import Button from '../lib/Button/Button';

const Wrap = styled.div`
  > div {
    margin-top: 20px;
    margin-bottom: 10px;
  }
`;

const Home: React.FC = () => {
  const fn = (key: number) => {
    console.log(key);
  };
  return (
    <Wrap>
      <Dropdown callback={fn}>
        <span>点击我</span>
        <DropdownItem>
          <Button type="link" key={1}>
            当页面上的操作命令过多时
          </Button>
          <Button type="link" key={2}>
            用此组件可以收纳操作元素
          </Button>
          <Button type="link" key={3}>
            点击或移入触点
          </Button>
        </DropdownItem>
      </Dropdown>
    </Wrap>
  );
};

export default Home;
