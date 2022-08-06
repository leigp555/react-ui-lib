import React from 'react';
import { Progress } from '../../lib';

export const Demo: React.FC = () => {
  return (
    <div className="Eg">
      <Progress percent={40} style={{ height: '10px', width: '300px' }} />
      <Progress percent={60} finishColor="orange" undoneColor="green" />
      <Progress type="circle" percent={60} finishColor="red" undoneColor="green" />
      <Progress
        type="circle"
        percent={20}
        finishColor="red"
        undoneColor="green"
        format={(percent) => `${percent} Days`}
      />
    </div>
  );
};
