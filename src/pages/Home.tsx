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
        <DropdownItem>xxx</DropdownItem>
        <DropdownItem>yyy</DropdownItem>
        <DropdownItem>zzz</DropdownItem>
      </Dropdown>
    </Wrap>
  );
};

export default Home;
