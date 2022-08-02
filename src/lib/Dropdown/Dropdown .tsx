import React, { HTMLAttributes, ReactElement, useMemo, useState } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

export interface DropdownProps extends HTMLAttributes<HTMLDivElement> {
  callback: (key: number) => void;
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
    transition: opacity 300ms;
  }
  .my-node-exit {
    opacity: 1;
  }
  .my-node-exit-active {
    opacity: 0;
    transition: opacity 300ms;
  }
`;

const DivEl = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  color: #636567;
  :hover {
    color: #1890ff;
  }
`;
const Inner = styled.div`
  position: relative;
  top: 8px;
  left: 0;
  padding: 10px;
  min-width: 100px;
  background-color: #fff;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);
  &::before {
    content: '';
    display: inline-block;
    position: absolute;
    top: -5px;
    left: 20%;
    width: 10px;
    height: 10px;
    background-color: #ffffff;
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);
    transform: rotate(45deg);
  }
`;

interface Provider {
  callback: (key: number) => void;
}
export const callbackProvider = React.createContext<Provider>(null!);

const Dropdown: React.FC<DropdownProps> = (props) => {
  const { children, callback } = props;
  const fn = useMemo(() => callback, []);
  const [enter, setEnter] = useState<boolean>(false);
  const action = () => {
    setEnter(true);
  };
  const leave = () => {
    setEnter(false);
  };
  const render = () => {
    const otherVNode: VNode[] = [];
    const dropdownVNode: VNode[] = [];
    React.Children.map(children, (child) => {
      const vNode = child as VNode;
      if (React.isValidElement(vNode) && vNode.type.name === 'CarouselItem') {
        dropdownVNode.push(vNode);
      } else {
        otherVNode.push(vNode);
      }
    });
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    const value = { callback: fn };
    return (
      <DropdownStyled onMouseOver={action} onClick={action} onMouseOut={leave}>
        <DivEl>{otherVNode}</DivEl>
        <CSSTransition in={enter} timeout={300} unmountOnExit classNames="my-node">
          <callbackProvider.Provider value={value}>
            <Inner className="dropdown"> {dropdownVNode}</Inner>
          </callbackProvider.Provider>
        </CSSTransition>
      </DropdownStyled>
    );
  };
  return <>{render()}</>;
};

export default Dropdown;
