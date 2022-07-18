import React, { HTMLAttributes, useContext, useState } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { menuCtx } from './Menu ';

interface Props extends HTMLAttributes<HTMLDivElement> {
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
  const needBorder = !!children;
  const [enter, setEnter] = useState<boolean>(false);
  const getOrder = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.target as HTMLDivElement;
    const orderStr = el.getAttribute('data-order');
    if (orderStr) {
      const order = parseInt(orderStr, 10);
      callback(order);
    }
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
        <span className="label">{label}</span>
        <CSSTransition in={enter} timeout={400} unmountOnExit classNames="my-node">
          <div
            className="content"
            role="presentation"
            onClick={(e: React.MouseEvent<HTMLDivElement>) => getOrder(e)}
          >
            {children}
          </div>
        </CSSTransition>
      </div>
    </SubMenuStyled>
  );
};
SubMenu.defaultProps = {
  label: '导航',
  children: ''
};

export default SubMenu;
