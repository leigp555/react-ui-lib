import React from 'react';
import styled from 'styled-components';
import Progress from '../lib/Progress/Progress';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  height: 400px;
`;

const Home: React.FC = () => {
  return (
    <Wrap>
      <Progress percent={40} />
      <Progress percent={60} finishColor="red" undoneColor="green" />
      <Progress
        percent={60}
        finishColor="red"
        undoneColor="green"
        format={(percent) => `${percent} Days`}
      />
    </Wrap>
  );
};

export default Home;
