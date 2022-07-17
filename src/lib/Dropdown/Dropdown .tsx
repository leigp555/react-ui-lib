import React, { HTMLAttributes, ReactElement } from 'react';
import styled from 'styled-components';

// 不知道react的虚拟节点什么类型所以扩充vNode类型来消除ts警告
type VNode = ReactElement & { type: { name: string } };

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
const DropdownStyled = styled.div`
  border: 2px solid orange;
  display: inline-block;
`;

const Dropdown: React.FC<Props> = (props) => {
  const { children, ...rest } = props;
  const render = (): React.ReactNode => {
    return React.Children.map(children, (child) => {
      const vNode = child as VNode;
      if (React.isValidElement(vNode) && vNode.type.name === 'Button') {
        return <div>hahah</div>;
      }
      return child;
    });
  };
  return <DropdownStyled {...rest}>{render()}</DropdownStyled>;
};

export default Dropdown;
