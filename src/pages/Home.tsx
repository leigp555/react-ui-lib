import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: start;
  align-items: start;
  line-height: 1.5em;
  > .row {
    display: flex;
    flex-direction: row;
    gap: 50px;
    justify-content: start;
    align-items: center;
    width: 100%;
  }
`;

const Home: React.FC = () => {
  return (
    <Wrap>
      <div className="row">xx</div>
    </Wrap>
  );
};

export default Home;
