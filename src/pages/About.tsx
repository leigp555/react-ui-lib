import React from 'react';
import styled from 'styled-components';
import { Typography, Title, Paragraph } from '../lib';

const AboutWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  flex-grow: 10;
  > .about-inner {
    margin-top: 10vh;
    margin-left: 5vw;
  }
`;

const About: React.FC = () => {
  return (
    <AboutWrap>
      <div className="about-inner">
        <Typography>
          <Paragraph>
            <Title level={3}>版本</Title>
            <p>version: 2.0.0</p>
          </Paragraph>
          <Paragraph>
            <Title level={3}>技术栈</Title>
            <ul>
              <li>react</li>
              <li>react-dom</li>
              <li>react-router-dom</li>
              <li>react-transition-group</li>
              <li>styled-components</li>
              <li>dayjs</li>
              <li>classnames</li>
              <li>sass</li>
              <li>create-react-app</li>
              <li>eslint</li>
              <li>typescript</li>
            </ul>
          </Paragraph>
        </Typography>
      </div>
    </AboutWrap>
  );
};

export default About;
