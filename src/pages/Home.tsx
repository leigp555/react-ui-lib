import React from 'react';
import styled from 'styled-components';
import Calendar from '../lib/Calendar/Calendar';

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
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 300px;
  }
`;

const Home: React.FC = () => {
  const fn = (dataValue: string) => {
    console.log(dataValue);
  };
  return (
    <Wrap>
      <div className="row">
        <Calendar callback={fn} />
      </div>
    </Wrap>
  );
};

export default Home;
