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
      A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be
      found as a welcome guest in many households across the world.
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
      </Collapse>
    </Wrap>
  );
};

export default Home;
