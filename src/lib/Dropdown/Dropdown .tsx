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

const Wrap = styled.div`
  position: relative;
`;
const Inner = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
`;
const Fuck = styled.div`
  border: 5px solid red;
  width: 200px;
  > div {
    visibility: hidden;
    height: 100px;
  }
  > div:hover {
    visibility: visible;
  }
`;

const Dropdown: React.FC<Props> = (props) => {
  const { children, ...rest } = props;
  const render = () => {
    const button: VNode[] = [];
    const arr: VNode[] = [];
    React.Children.map(children, (child) => {
      const vNode = child as VNode;
      if (React.isValidElement(vNode) && vNode.type.name === 'DropdownItem') {
        arr.push(vNode);
      } else {
        button.push(vNode);
      }
    });
    return (
      <Fuck>
        {button}
        <Wrap>
          <Inner>{arr}</Inner>
        </Wrap>
      </Fuck>
    );
  };
  render();
  return <DropdownStyled {...rest}>{render()}</DropdownStyled>;
};

export default Dropdown;
