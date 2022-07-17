import React, { HTMLAttributes, ReactElement, useState } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import Down from '../../static/icons/down.svg';

interface Props extends HTMLAttributes<HTMLDivElement> {
  callback?: (key: number) => void;
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

const Inner = styled.div``;
const DivEl = styled.div`
  display: flex;
  gap: 5px;
  color: #636567;
  :hover {
    color: #1890ff;
  }
`;

const Dropdown: React.FC<Props> = (props) => {
  const { children, callback } = props;
  if (callback) callback(2);
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
      <DropdownStyled onMouseOver={action} onClick={action} onMouseOut={leave}>
        <DivEl>
          {otherVNode}
          <Down width="1em" height="1em" fill={enter ? '#1890ff' : '#636567'} />
        </DivEl>
        <CSSTransition in={enter} timeout={300} unmountOnExit classNames="my-node">
          <Inner className="dropdown">{dropdownVNode}</Inner>
        </CSSTransition>
      </DropdownStyled>
    );
  };
  return <>{render()}</>;
};

Dropdown.defaultProps = {
  callback: () => {}
};

export default Dropdown;
