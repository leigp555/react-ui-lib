import React from 'react';
import { Button } from '../../lib';

export const Demo: React.FC = () => {
  return (
    <div className="Eg">
      <div className="showEg">
        <Button>按钮</Button>
        <Button type="primary">按钮</Button>
        <Button type="default">按钮</Button>
        <Button type="link">按钮</Button>
        <Button type="text">按钮</Button>
        <Button type="dashed">按钮</Button>
        <Button disabled>按钮</Button>
        <Button radius>按钮</Button>
      </div>
    </div>
  );
};
