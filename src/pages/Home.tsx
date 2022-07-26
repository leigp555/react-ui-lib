import React from 'react';
import styled from 'styled-components';
import Button from '../lib/Button/Button';
import Tooltip from '../lib/Tooltip/Tooltip';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  justify-content: center;
  align-items: center;
`;

const Home: React.FC = () => {
  const text = 'prompt text';
  return (
    <Wrap>
      <Tooltip position="rightTop" tip={text}>
        <Button>rightTopxxxxxxxxx</Button>
      </Tooltip>
      <Tooltip position="rightCenter" tip={text}>
        <Button>rightCenterxxxxxxxxxx</Button>
      </Tooltip>
      <Tooltip position="rightBottom" tip={text}>
        <Button>rightBottomxxxxxxxxxx</Button>
      </Tooltip>

      <Tooltip position="leftTop" tip={text}>
        <Button>leftTopxxxxxxx</Button>
      </Tooltip>
      <Tooltip position="leftCenter" tip={text}>
        <Button>leftCenterxxxxxxxx</Button>
      </Tooltip>
      <Tooltip position="leftBottom" tip={text}>
        <Button>leftBottomxxxxxx</Button>
      </Tooltip>

      <Tooltip position="topLeft" tip={text}>
        <Button>topLeftxxxxxxx</Button>
      </Tooltip>
      <Tooltip position="topCenter" tip={text}>
        <Button>topCenterxxxxxx</Button>
      </Tooltip>
      <Tooltip position="topRight" tip={text}>
        <Button>topRightxxxxxx</Button>
      </Tooltip>

      <Tooltip position="bottomLeft" tip={text}>
        <Button>bottomLeftxxxxx</Button>
      </Tooltip>
      <Tooltip position="bottomCenter" tip={text}>
        <Button>bottomCenterxxxxxxx</Button>
      </Tooltip>
      <Tooltip position="bottomRight" tip={text}>
        <Button>bottomRightxxxxxx</Button>
      </Tooltip>
    </Wrap>
  );
};

export default Home;
