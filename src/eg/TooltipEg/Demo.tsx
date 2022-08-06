import React from 'react';
import { Button, Tooltip } from '../../lib';

export const Demo: React.FC = () => {
  const text = 'prompt text';
  return (
    <div className="Eg" style={{ alignItems: 'center' }}>
      <div className="showEg" style={{ gap: '50px' }}>
        <Tooltip position="rightTop" tip={text}>
          <Button>rightTop</Button>
        </Tooltip>
        <Tooltip position="rightCenter" tip={text}>
          <Button>rightCenter</Button>
        </Tooltip>
        <Tooltip position="rightBottom" tip={text}>
          <Button>rightBottom</Button>
        </Tooltip>
      </div>
      <div className="showEg" style={{ gap: '50px' }}>
        <Tooltip position="leftTop" tip={text}>
          <Button>leftTop</Button>
        </Tooltip>
        <Tooltip position="leftCenter" tip={text}>
          <Button>leftCenter</Button>
        </Tooltip>
        <Tooltip position="leftBottom" tip={text}>
          <Button>leftBottom</Button>
        </Tooltip>
      </div>
      <div className="showEg" style={{ gap: '50px' }}>
        <Tooltip position="topLeft" tip={text}>
          <Button>topLeft</Button>
        </Tooltip>
        <Tooltip position="topCenter" tip={text}>
          <Button>topCenter</Button>
        </Tooltip>
        <Tooltip position="topRight" tip={text}>
          <Button>topRight</Button>
        </Tooltip>
      </div>
      <div className="showEg" style={{ gap: '50px' }}>
        <Tooltip position="bottomLeft" tip={text}>
          <Button>bottomLeft</Button>
        </Tooltip>
        <Tooltip position="bottomCenter" tip={text}>
          <Button>bottomCenter</Button>
        </Tooltip>
        <Tooltip position="bottomRight" tip={text}>
          <Button>bottomRight</Button>
        </Tooltip>
      </div>
    </div>
  );
};
