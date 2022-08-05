import React, { useState } from 'react';
import { Button, Step, Steps, Tip } from '../../lib';
import './index.scss';

const steps = [
  {
    title: '步骤一',
    content: '内容一'
  },
  {
    title: '步骤二',
    content: '内容二'
  },
  {
    title: '步骤三',
    content: '内容三'
  }
];

export const Demo: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  return (
    <div className="Eg">
      <div className="row">
        <Steps current={current}>
          {steps.map((item) => (
            <Step key={item.title} value={item.title} />
          ))}
        </Steps>
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action">
          {current > 0 && (
            <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
              Previous
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" onClick={() => Tip('success', 'Processing complete!')}>
              Done
            </Button>
          )}
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
