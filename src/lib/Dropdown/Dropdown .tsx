import React, { HTMLAttributes, ReactElement, useState } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
// 不知道react的虚拟节点什么类型所以扩充vNode类型来消除ts警告
type VNode = ReactElement & { type: { name: string } };

const DropdownStyled = styled.div`
  display: inline-block;
  position: relative;
  top: 0;
  left: 0;
  .my-node-enter {
    opacity: 0;
  }
  .my-node-enter-active {
    opacity: 1;
    transition: opacity 250ms;
  }
  .my-node-exit {
    opacity: 1;
  }
  .my-node-exit-active {
    opacity: 0;
    transition: opacity 250ms;
  }
`;
const DivEl = styled.div``;

const Dropdown: React.FC<Props> = (props) => {
  const { children } = props;
  const [enter, setEnter] = useState<boolean>(false);
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
    const action = () => {
      setEnter(true);
    };
    const leave = () => {
      setEnter(false);
    };
    return (
      <DropdownStyled>
        <DivEl onMouseOver={action} onClick={action} onMouseOut={leave}>
          {otherVNode}
        </DivEl>
        <CSSTransition in={enter} timeout={300} unmountOnExit classNames="my-node">
          <div className="dropdown">{dropdownVNode}</div>
        </CSSTransition>
      </DropdownStyled>
    );
  };
  return <>{render()}</>;
};

export default Dropdown;
