import React from 'react';
import { Tab, Tabs } from '../../lib';
import WarnIcon from '../../lib/icons/warn.svg';

export const Demo: React.FC = () => {
  const onChange = (key: string) => {
    console.log(key);
  };
  return (
    <div className="Eg">
      <div style={{ border: '1px solid orange', padding: '30px' }}>
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
      <div style={{ border: '1px solid orange', padding: '30px' }}>
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
      <div style={{ border: '1px solid orange', padding: '30px' }}>
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
      <div style={{ border: '1px solid orange', padding: '30px' }}>
        <Tabs defaultKey="1" callback={onChange} gap={30}>
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
      <div style={{ border: '1px solid orange', padding: '30px' }}>
        <Tabs defaultKey="1" callback={onChange} gap={30}>
          <Tab
            tab={
              <>
                <WarnIcon width="1em" height="1em" />
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
                <WarnIcon width="1em" height="1em" />
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
                <WarnIcon width="1em" height="1em" />
                <span>Tab 3</span>
              </>
            }
            index="3"
          >
            Content of Tab Pane 3
          </Tab>
        </Tabs>
      </div>
      <div style={{ border: '1px solid orange', padding: '30px' }}>
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
    </div>
  );
};
