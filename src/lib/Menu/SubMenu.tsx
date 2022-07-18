import React, { HTMLAttributes, ReactElement, useContext, useRef, useState } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { menuCtx } from './Menu ';

interface Props extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  children?: React.ReactNode;
}
// 不知道react的虚拟节点什么类型所以扩充vNode类型来消除ts警告
type VNode = ReactElement & { type: { name: string } };
type PropsStyled = {
  needBorder: boolean;
};

const SubMenuStyled = styled.div`
  .my-node-enter {
    opacity: 0;
  }
  .my-node-enter-active {
    opacity: 1;
    transition: opacity 400ms;
  }
  .my-node-exit {
    opacity: 1;
  }
  .my-node-exit-active {
    opacity: 0;
    transition: opacity 400ms;
  }
  position: relative;
  > .wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-8px);
    display: flex;
    flex-direction: column;
    gap: 10px;
    > .content {
      background-color: #fff;
      transform: translateX(-25%);
      box-shadow: ${(props: PropsStyled) =>
        props.needBorder ? '0 0 2px 1px rgba(0, 0,0,.2)' : 'none'};
    }
    > .label {
      cursor: pointer;
      white-space: nowrap;
    }
  }
`;
const SubMenu: React.FC<Props> = (props) => {
  const { children, label, ...rest } = props;
  const { callback } = useContext(menuCtx);
  const needBorder = children instanceof Array;
  const activeRef = useRef<HTMLDivElement | null>(null);
  const [enter, setEnter] = useState<boolean>(false);
  const getOrder = (e: React.MouseEvent<HTMLDivElement>) => {
    if (activeRef.current) {
      activeRef.current.style.color = 'inherit';
    }
    const el = e.target as HTMLDivElement;
    activeRef.current = el;
    el.style.color = '#1890ff';
    const orderStr = el.getAttribute('data-order');
    if (orderStr) {
      const order = parseInt(orderStr, 10);
      callback(order);
    }
  };
  const render = () => {
    const labelNode: VNode[] = [];
    const otherNode: VNode[] = [];
    React.Children.map(children, (child) => {
      const vNode = child as VNode;
      if (React.isValidElement(vNode) && vNode.type.name === 'Label') {
        labelNode.push(vNode);
      } else {
        otherNode.push(vNode);
      }
    });
    return (
      <>
        <span className="label">{labelNode}</span>
        <CSSTransition in={enter} timeout={400} unmountOnExit classNames="my-node">
          <div
            className="content"
            role="presentation"
            onClick={(e: React.MouseEvent<HTMLDivElement>) => getOrder(e)}
          >
            {otherNode}
          </div>
        </CSSTransition>
      </>
    );
  };
  return (
    <SubMenuStyled needBorder={needBorder} {...rest}>
      <div
        role="presentation"
        className="wrap"
        onMouseOver={() => setEnter(true)}
        onMouseOut={() => {
          setEnter(false);
        }}
      >
        {render()}
      </div>
    </SubMenuStyled>
  );
};
SubMenu.defaultProps = {
  label: '导航',
  children: ''
};

export default SubMenu;
