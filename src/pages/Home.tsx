import React from 'react';
import styled from 'styled-components';
import Tabs from '../lib/Tabs/Tabs';
import Tab from '../lib/Tabs/Tab';
import Warning from '../lib/icons/warn.svg';

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
      <div style={{ border: '1px solid rgba(0,0,0,.1)', width: '100%' }}>
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
      </div>
      <div style={{ border: '1px solid rgba(0,0,0,.1)', width: '100%' }}>
        <Tabs defaultKey="1" callback={onChange} bgc="orange">
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
      </div>
      <div style={{ border: '1px solid rgba(0,0,0,.1)', width: '100%' }}>
        <Tabs defaultKey="1" callback={onChange} position="center">
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
      </div>
      <div style={{ border: '1px solid rgba(0,0,0,.1)', width: '100%' }}>
        <Tabs defaultKey="1" callback={onChange} gap={100}>
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
      </div>
      <div style={{ border: '1px solid rgba(0,0,0,.1)', width: '100%' }}>
        <Tabs defaultKey="1" callback={onChange} gap={100}>
          <Tab
            tab={
              <>
                <Warning width="1em" height="1em" />
                <span>Tab 1</span>
              </>
            }
            index="1"
          >
            Content of Tab Pane 1
          </Tab>
          <Tab
            tab={
              <>
                <Warning width="1em" height="1em" />
                <span>Tab 2</span>
              </>
            }
            index="2"
          >
            Content of Tab Pane 2
          </Tab>
          <Tab
            tab={
              <>
                <Warning width="1em" height="1em" />
                <span>Tab 3</span>
              </>
            }
            index="3"
          >
            Content of Tab Pane 3
          </Tab>
        </Tabs>
      </div>
      <div style={{ border: '1px solid rgba(0,0,0,.1)', width: '100%' }}>
        <Tabs defaultKey="1" callback={onChange}>
          <Tab tab="Tab 1" index="1">
            Content of Tab Pane 1
          </Tab>
          <Tab tab="Tab 2xxxxcccc" index="2">
            Content of Tab Pane 2
          </Tab>
          <Tab tab="Tab 3xxxxcccccccccccccxxxxxxxxxx" index="3">
            Content of Tab Pane 3
          </Tab>
        </Tabs>
      </div>
    </Wrap>
  );
};

export default Home;
