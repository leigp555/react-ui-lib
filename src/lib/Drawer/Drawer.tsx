import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { createPortal } from 'react-dom';

interface Props extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  position?: 'left' | 'right' | 'top' | 'bottom';
  visible?: boolean;
  children?: React.ReactNode;
}
const DrawerStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  .main {
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    background-color: white;
    z-index: 100;
    > .title {
      font-size: 1.2em;
      font-weight: 700;
      padding: 15px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
    > .content {
      padding: 20px 15px;
      display: flex;
      gap: 10px;
      flex-direction: column;
    }
  }
  .overflow {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.1);
    z-index: 1;
  }
`;
const Drawer: React.FC<Props> = (props) => {
  const { children, title, position, visible, ...rest } = props;
  return createPortal(
    <DrawerStyled className={classNames('wrap', position!)} {...rest}>
      <div className="main">
        <div className="title">{title}</div>
        <div className="content">{children}</div>
      </div>
      <div className="overflow" />
    </DrawerStyled>,
    document.body
  );
};
Drawer.defaultProps = {
  children: '',
  title: '',
  position: 'right',
  visible: false
};

export default Drawer;
