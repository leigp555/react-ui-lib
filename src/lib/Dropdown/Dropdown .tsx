import React, { HTMLAttributes, ReactElement } from 'react';
import styled, { keyframes } from 'styled-components';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
// 不知道react的虚拟节点什么类型所以扩充vNode类型来消除ts警告
type VNode = ReactElement & { type: { name: string } };

const show = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;

const DropdownStyled = styled.div`
  display: inline-block;
  position: relative;
  top: 0;
  left: 0;
  &:hover {
    > .dropdown {
      animation: ${show} 3s alternate;
      opacity: 1;
    }
  }
`;

const Inner = styled.div`
  opacity: 0;
`;

const Dropdown: React.FC<Props> = (props) => {
  const { children } = props;
  const render = () => {
    const otherVNode: VNode[] = [];
    const dropdownVNode: VNode[] = [];
    React.Children.map(children, (child) => {
      const vNode = child as VNode;
      if (React.isValidElement(vNode) && vNode.type.name === 'DropdownItem') {
        dropdownVNode.push(vNode);
      } else {
        otherVNode.push(vNode);
      }
    });
    return (
      <DropdownStyled>
        {otherVNode}
        <Inner className="dropdown">{dropdownVNode}</Inner>
      </DropdownStyled>
    );
  };
  return <>{render()}</>;
};

export default Dropdown;
