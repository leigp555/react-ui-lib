import React, { HTMLAttributes, ReactElement, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { CommonStyle } from '../common/common';

// 不知道react的虚拟节点什么类型所以扩充vNode类型来消除ts警告
type VNode = ReactElement & { type: { name: string } };

export interface RadioProps extends HTMLAttributes<HTMLDivElement> {
  callback?: (num: number) => void;
  value?: number;
  direction?: 'column' | 'row';
  children?: React.ReactNode;
}
const RadioStyled = styled(CommonStyle)`
  display: flex;
  justify-content: start;
  align-items: start;
  gap: 12px;
`;
// 这是group组件
// 这是group组件
// 这是group组件
const Radio: React.FC<RadioProps> = (props) => {
  const { children, callback, value, ...rest } = props;
  const radioRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (radioRef.current) {
      radioRef.current.addEventListener('click', (e) => {
        const el = e.target as HTMLInputElement;
        if (el.tagName.toLowerCase() === 'input') {
          callback!(parseInt(el.value, 10));
        }
      });
    }
  }, [value]);
  const render = () => {
    const name = Math.random().toString();
    return React.Children.map(children, (child) => {
      const vNode = child as VNode;
      if (React.isValidElement(vNode) && vNode.props.value === value) {
        return React.cloneElement(vNode, { checked: true, name });
      }
      return React.cloneElement(vNode, { name });
    });
  };
  return (
    <RadioStyled ref={radioRef} role="presentation" {...rest}>
      {render()}
    </RadioStyled>
  );
};
Radio.defaultProps = {
  callback: () => {},
  value: 1,
  direction: 'row',
  children: ''
};

export default Radio;
