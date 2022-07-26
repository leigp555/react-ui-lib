import React from 'react';
import styled from 'styled-components';
import Button from '../lib/Button/Button';
import Popover from '../lib/Popover/Popover';

const Wrap = styled.div`
  position: relative;
  display: flex;
  gap: 50px;
  flex-direction: column;
  width: 350px;
`;

const Home: React.FC = () => {
  const content = (
    <>
      <p>Content</p>
      <p>Content</p>
    </>
  );
  return (
    <Wrap>
      <Popover position="rightTop" content={content} title="Title" trigger="hover">
        <Button>rightTop</Button>
      </Popover>
      <Popover position="rightCenter" content={content} title="Title" trigger="hover">
        <Button>rightCenter</Button>
      </Popover>
      <Popover position="rightBottom" content={content} title="Title" trigger="click">
        <Button>rightBottom</Button>
      </Popover>

      <Popover position="leftTop" content={content} title="Title" trigger="click">
        <Button>leftTop</Button>
      </Popover>
      <Popover position="leftCenter" content={content} title="Title" trigger="click">
        <Button>leftCenter</Button>
      </Popover>
      <Popover position="leftBottom" content={content} title="Title" trigger="click">
        <Button>leftBottom</Button>
      </Popover>

      <Popover position="topLeft" content={content} title="Title" trigger="click">
        <Button>topLeft</Button>
      </Popover>
      <Popover position="topCenter" content={content} title="Title" trigger="click">
        <Button>topCenter</Button>
      </Popover>
      <Popover position="topRight" content={content} title="Title" trigger="click">
        <Button>topRight</Button>
      </Popover>

      <Popover position="bottomLeft" content={content} title="Title" trigger="click">
        <Button>bottomLeft</Button>
      </Popover>
      <Popover position="bottomCenter" content={content} title="Title" trigger="click">
        <Button>bottomCenter</Button>
      </Popover>
      <Popover position="bottomRight" content={content} title="Title" trigger="click">
        <Button>bottomRight</Button>
      </Popover>
    </Wrap>
  );
};

export default Home;
