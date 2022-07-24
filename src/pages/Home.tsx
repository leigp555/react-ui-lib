import React from 'react';
import styled from 'styled-components';
import Tabs from '../lib/Tabs/Tabs';
import Tab from '../lib/Tabs/Tab';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  justify-content: center;
  align-items: center;
`;

const Home: React.FC = () => {
  const onChange = (key: string) => {
    console.log(key);
  };
  return (
    <Wrap>
      <Tabs defaultKey="1" callback={onChange}>
        <Tab tab="Tab 1" index="1">
          Content of Tab Pane 1
        </Tab>
        <Tab tab="Tab 2" index="2">
          Content of Tab Pane 2
        </Tab>
        <Tab tab="Tab 3" index="3">
          Content of Tab Pane 3
        </Tab>
      </Tabs>
    </Wrap>
  );
};

export default Home;
