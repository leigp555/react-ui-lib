import React from 'react';
import styled from 'styled-components';
import Tag from '../lib/Tag/Tag';

const Wrap = styled.div`
  display: flex;
  //flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

const Home: React.FC = () => {
  return (
    <Wrap>
      <Tag color="#CCFFFF">magenta</Tag>
      <Tag color="#FF6666">red</Tag>
      <Tag color="#993333">volcano</Tag>
      <Tag color="#FFFF66">orange</Tag>
      <Tag color="#000000">gold</Tag>
      <Tag color="#CCCCCC">lime</Tag>
      <Tag color="#CCFFCC">green</Tag>
      <Tag color="#0099CC">cyan</Tag>
      <Tag color="#333366">blue</Tag>
      <Tag color="#999999">teal</Tag>
      <Tag color="#FF99CC">purple</Tag>
      <Tag color="#FF0000FF">purple</Tag>
    </Wrap>
  );
};

export default Home;
