import React, { HTMLAttributes, ReactElement, useEffect, useRef } from 'react';
import styled from 'styled-components';

// 不知道react的虚拟节点什么类型所以扩充vNode类型来消除ts警告
type VNode = ReactElement & { type: { name: string } };

interface GroupProps extends HTMLAttributes<HTMLDivElement> {
  callback?: (num: number) => void;
  value?: number;
  children?: React.ReactNode;
}
const GroupStyled = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 12px;
`;
// 这是group组件
// 这是group组件
// 这是group组件
const Group: React.FC<GroupProps> = (props) => {
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
  }, []);
  const render = () => {
    return React.Children.map(children, (child) => {
      const vNode = child as VNode;
      if (React.isValidElement(vNode) && vNode.props.value === value) {
        return React.cloneElement(vNode, { checked: true });
      }
      return vNode;
    });
  };
  return (
    <GroupStyled ref={radioRef} role="presentation" {...rest}>
      {render()}
    </GroupStyled>
  );
};
Group.defaultProps = {
  callback: () => {},
  value: 1,
  children: ''
};

// 这是子组件
// 这是子组件
// 这是子组件
interface ItemProps extends HTMLAttributes<HTMLDivElement> {
  value?: number;
  checked?: boolean;
  children?: React.ReactNode;
}
const ItemStyled = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`;
const InputStyled = styled.input.attrs(() => ({ type: 'radio' }))`
  cursor: pointer;
`;

const Item: React.FC<ItemProps> = (props) => {
  const { children, checked, value, ...rest } = props;
  return (
    <ItemStyled {...rest}>
      <div>
        <InputStyled name="radio" value={value} defaultChecked={checked} />
      </div>
      <span>{children}</span>
    </ItemStyled>
  );
};
Item.defaultProps = {
  checked: false,
  value: 0,
  children: ''
};

export const Radio = { Group, Item };
