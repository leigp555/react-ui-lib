import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import './index.scss';

interface Props extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  position?: 'left' | 'right' | 'top' | 'bottom';
  visible?: boolean;
  children?: React.ReactNode;
  onClose: () => void;
}

const Wrap = styled.div`
  .overflow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.1);
    z-index: 1;
  }
`;
const DrawerStyled = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 300px;
  z-index: 100;
  background-color: white;
  .main {
    height: 100%;
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
`;
const Drawer: React.FC<Props> = (props) => {
  const { children, title, position, onClose, visible } = props;
  return createPortal(
    <Wrap>
      <CSSTransition in={visible} classNames="box" timeout={500} unmountOnExit>
        <DrawerStyled className={classNames(position!)}>
          <div className="main">
            <div className="title">{title}</div>
            <div className="content">{children}</div>
          </div>
        </DrawerStyled>
      </CSSTransition>
      <CSSTransition in={visible} classNames="overflow" timeout={500} unmountOnExit>
        <div className="overflow" role="presentation" onClick={onClose} />
      </CSSTransition>
    </Wrap>,
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
