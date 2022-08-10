import React, { HTMLAttributes, useContext, useState } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { menuCtx } from './Menu ';
import { common, nodeList } from './common';

export interface SubMenuProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  children?: React.ReactNode;
}
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
      min-width: 150px;
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
const SubMenu: React.FC<SubMenuProps> = (props) => {
  const { children, label, ...rest } = props;
  const { setOrder } = useContext(menuCtx);
  const needBorder = children instanceof Array;
  const [enter, setEnter] = useState<boolean>(false);
  const getOrder = (e: React.MouseEvent<HTMLDivElement>) => common(setOrder)(e);
  const render = () => {
    const { labelNode, otherNode } = nodeList(children);
    console.log(otherNode);
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
  render();
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
