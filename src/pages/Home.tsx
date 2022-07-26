import React from 'react';
import styled from 'styled-components';
import Collapse from '../lib/Collapse/Collapse';
import Panel from '../lib/Collapse/Panel';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 600px;
`;

const Home: React.FC = () => {
  const text = (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius impedit laboriosam nesciunt
      optio praesentium quaerat ratione sequi ullam unde velit! Accusantium dolorum magnam mollitia
      quibusdam rerum sit suscipit temporibus voluptate!
    </p>
  );

  return (
    <Wrap>
      <Collapse defaultKey="1">
        <Panel header="This is panel header 1" order="1">
          <div>{text}</div>
        </Panel>
        <Panel header="This is panel header 2" order="2">
          <div>{text}</div>
        </Panel>
        <Panel header="This is panel header 3" order="3">
          <div>{text}</div>
        </Panel>
        <Panel header="This is panel header 4" order="4">
          <div>{text}</div>
        </Panel>
        <Panel header="This is panel header 5" order="5">
          <div>{text}</div>
        </Panel>
      </Collapse>
      <Collapse defaultKey="null">
        <Panel header="This is panel header 1" order="1">
          <div>{text}</div>
        </Panel>
        <Panel header="This is panel header 2" order="2">
          <div>{text}</div>
        </Panel>
        <Panel header="This is panel header 3" order="3">
          <div>{text}</div>
        </Panel>
        <Panel header="This is panel header 4" order="4">
          <div>{text}</div>
        </Panel>
        <Panel header="This is panel header 5" order="5">
          <div>{text}</div>
        </Panel>
      </Collapse>
    </Wrap>
  );
};

export default Home;
