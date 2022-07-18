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
        <Button>ddddddd</Button>
        <DropdownItem order={1}>
          <p>xxxxx</p>
          <p>yyy</p>
        </DropdownItem>
        <DropdownItem order={2}>
          <p>xxxxx</p>
        </DropdownItem>
        <DropdownItem order={3}>
          <p>xxxxx</p>
        </DropdownItem>
      </Dropdown>
    </Wrap>
  );
};

export default Home;
