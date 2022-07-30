import React, { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import SuccessIcon from '../icons/success.svg';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode[];
  current?: number;
}
type VNode = ReactNode & { type: { name: string } };
const StepsStyled = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
  > .title {
    display: flex;
    align-items: center;
    gap: 10px;
    > .icon {
      display: flex;
      align-items: center;
    }
    > .stepNum {
      width: 1.8em;
      height: 1.8em;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #1890ff;
    }
  }
  > .line {
    flex-grow: 10;
    display: flex;
    align-items: center;
    > .lineContent {
      width: 100%;
      height: 1px;
      background-color: #1890ff;
    }
  }
`;
const Steps: React.FC<Props> = (props) => {
  const { children, current, ...rest } = props;
  const render = () => {
    return React.Children.map(children, (child, index) => {
      const vNode = child as VNode;
      if (React.isValidElement(vNode) && vNode.type.name === 'Step') {
        if (index < children!.length - 1) {
          return (
            <>
              <div className="title">
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
          <div className="title">
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
  return <StepsStyled {...rest}>{render()}</StepsStyled>;
};
Steps.defaultProps = {
  current: 0
};

export default Steps;
