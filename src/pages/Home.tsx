import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from '../lib/Slider/Slider';
import Progress from '../lib/Progress/Progress';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: start;
  align-items: start;
  > .row {
    display: flex;
    flex-direction: row;
    gap: 50px;
    justify-content: start;
    align-items: center;
  }
`;

const Home: React.FC = () => {
  const [defaultPercent, setPercent] = useState<number>(20);
  return (
    <Wrap>
      <div className="row">
        <Slider
          defaultPercent={defaultPercent}
          setPercent={setPercent}
          style={{ width: '300px' }}
        />
      </div>
      <div className="row">
        <Progress
          percent={50}
          style={{ width: '300px', height: '8px' }}
          undoneColor="#e1e1e1"
          finishColor="#91d5ff"
          dot
        />
      </div>
      <div className="row">
        <Progress
          percent={50}
          style={{ width: '300px', height: '8px' }}
          undoneColor="#e1e1e1"
          finishColor="#91d5ff"
        />
      </div>
    </Wrap>
  );
};

export default Home;
