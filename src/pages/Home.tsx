import React from 'react';
import styled from 'styled-components';

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
  return (
    <Wrap>
      <div className="row">xxx</div>
    </Wrap>
  );
};

export default Home;
