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
  return (
    <Wrap>
      <Dropdown>
        <Button>点击我</Button>
        <DropdownItem>
          <div>当页面上的操作命令过多时</div>
          <div>用此组件可以收纳操作元素</div>
          <div>点击或移入触点</div>
        </DropdownItem>
      </Dropdown>
    </Wrap>
  );
};

export default Home;
