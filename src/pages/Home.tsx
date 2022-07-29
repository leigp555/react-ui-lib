import React from 'react';
import styled from 'styled-components';
import Timeline from '../lib/Timeline/Timeline';
import TimeItem from '../lib/Timeline/TimeItem';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

// 组件使用
const Home: React.FC = () => {
  return (
    <Wrap>
      <Timeline>
        <TimeItem>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </TimeItem>
        <TimeItem>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </TimeItem>
        <TimeItem>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </TimeItem>
        <TimeItem>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </TimeItem>
        <TimeItem>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </TimeItem>
      </Timeline>
    </Wrap>
  );
};

export default Home;
