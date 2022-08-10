import React, { HTMLAttributes, ReactNode } from 'react';

import SuccessIcon from '../icons/success.svg';
import './index.scss';

export interface StepsProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode[];
  current?: number;
}
type VNode = ReactNode & { type: { name: string } };

const Steps: React.FC<StepsProps> = (props) => {
  const { children, current, ...rest } = props;
  const render = () => {
    return React.Children.map(children, (child, index) => {
      const vNode = child as VNode;
      if (React.isValidElement(vNode) && vNode.props.name === 'Step') {
        if (index < children!.length - 1) {
          return (
            <>
              <div className="ui-step-title">
                <span className="icon" style={{ display: current! <= index ? 'none' : 'flex' }}>
                  <SuccessIcon width="1.8em" height="1.8em" />
                </span>
                <span
                  className="stepNum"
                  style={{
                    display: current! > index ? 'none' : 'flex',
                    backgroundColor: current === index ? '#1890ff' : '#c9c9c9'
                  }}
                >
                  {index + 1}
                </span>
                <div> {vNode}</div>
              </div>
              <div className="line">
                <p className="lineContent" />
              </div>
            </>
          );
        }
        return (
          <div className="ui-step-title">
            <span className="icon" style={{ display: current! <= index ? 'none' : 'flex' }}>
              <SuccessIcon width="1.8em" height="1.8em" />
            </span>
            <span
              className="stepNum"
              style={{
                display: current! > index ? 'none' : 'flex',
                backgroundColor: current === index ? '#1890ff' : '#c9c9c9'
              }}
            >
              {index + 1}
            </span>
            <div> {vNode}</div>
          </div>
        );
      }
      return child;
    });
  };
  return (
    <div className="ui-steps-wrap" {...rest}>
      {render()}
    </div>
  );
};
Steps.defaultProps = {
  current: 0
};

export default Steps;
