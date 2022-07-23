import React from 'react';
import styled from 'styled-components';
import Button from '../lib/Button/Button';
import { Tip } from '../lib/Tip/Tip';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
const Home: React.FC = () => {
  const info = () => {
    Tip('success', 'This is a normal message', 3000);
    Tip('info', 'This is a normal message', 3000);
    Tip('warning', 'This is a normal message', 3000);
    Tip('error', 'This is a normal message', 3000);
    Tip('loading', 'This is a normal message', 3000);
  };
  return (
    <Wrap>
      <Button type="primary" onClick={info}>
        Display normal message
      </Button>
    </Wrap>
  );
};

export default Home;
