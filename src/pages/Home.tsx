import React from 'react';
import styled from 'styled-components';
import Segmented from '../lib/Segmented/Segmented';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: start;
`;

// 组件使用
const Home: React.FC = () => {
  return (
    <Wrap>
      <Segmented options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']} />
    </Wrap>
  );
};

export default Home;
