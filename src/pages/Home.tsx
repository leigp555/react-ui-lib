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
  const close = () => {
    console.log('close');
  };
  return (
    <Wrap>
      <Tag color="#FFFFCC">purple</Tag>
      <Tag color="#FF99FF">purple</Tag>
      <Tag color="#FF0000FF">purple</Tag>
      <Tag color="magenta">magenta</Tag>
      <Tag color="red">red</Tag>
      <Tag color="orange">orange</Tag>
      <Tag color="gold">gold</Tag>
      <Tag color="lime">lime</Tag>
      <Tag color="green">green</Tag>
      <Tag color="cyan">cyan</Tag>
      <Tag color="blue">blue</Tag>
      <Tag color="black">black</Tag>
      <Tag color="purple">purple</Tag>
      <Tag color="purple" callback={close} closeable>
        purple
      </Tag>
    </Wrap>
  );
};

export default Home;
