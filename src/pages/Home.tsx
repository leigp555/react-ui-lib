import React from 'react';
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
  return (
    <Wrap>
      <div className="row">
        <Slider defaultRange={30} />
      </div>
      <div className="row">
        <div>
          <Progress percent={40} style={{ width: '200px', height: '10px' }} />
        </div>
      </div>
    </Wrap>
  );
};

export default Home;
