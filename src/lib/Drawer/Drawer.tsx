import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import './index.scss';

export interface DrawerProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  position?: 'left' | 'right' | 'top' | 'bottom';
  visible?: boolean;
  children?: React.ReactNode;
  onClose: () => void;
  width?: number;
  height?: number;
}

const Wrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 1000;
  transition: all 500ms;
  .overflow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.1);
    z-index: 10;
  }
`;

type PropStyled = {
  width: number;
  height: number;
};

const DrawerStyled = styled.div`
  z-index: 1000;
  background-color: white;
  // width: ${(props: PropStyled) => `${props.width}px`};
  // height: ${(props: PropStyled) => `${props.height}px`};
  &.right {
    position: absolute;
    top: 0;
    right: 0;
    width: ${(props: PropStyled) => `${props.width}px`};
    height: 100%;
  }
  &.left {
    position: absolute;
    top: 0;
    left: 0;
    width: ${(props: PropStyled) => `${props.width}px`};
    height: 100%;
  }
  &.top {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: ${(props: PropStyled) => `${props.height}px`};
  }
  &.bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: ${(props: PropStyled) => `${props.height}px`};
  }

  .main {
    height: 100%;
    width: 100%;
    > .title {
      font-size: 1.2em;
      font-weight: 700;
      padding: 15px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
    > .content {
      //padding: 20px 15px;
      display: flex;
      gap: 10px;
      flex-direction: column;
      overflow-y: auto;
      max-height: 100vh;
      &::-webkit-scrollbar {
        //整个滚动条的宽高设置
        width: 4px; //宽高只有一个能生效，如果是横向滚动条高度生效，纵向滚动条宽度生效
        height: 4px;
      }
      &::-webkit-scrollbar-thumb {
        //滚动条滑块的设置
        border-radius: 3px;
        -moz-border-radius: 3px;
        -webkit-border-radius: 3px;
        background-color: #c3c3c3;
      }
      &::-webkit-scrollbar-track {
        //滚动条轨道设置
        background-color: #f1f1f1;
      }
    }
  }
`;
export const Drawer: React.FC<DrawerProps> = (props) => {
  const { children, title, width, height, position, onClose, visible } = props;
  return createPortal(
    <Wrap style={{ zIndex: visible ? 1000 : -1 }}>
      <CSSTransition in={visible} classNames={position} timeout={250} unmountOnExit>
        <DrawerStyled className={classNames(position!)} width={width!} height={height!}>
          <div className="main">
            <div className="title">{title}</div>
            <div className="content">{children}</div>
          </div>
        </DrawerStyled>
      </CSSTransition>
      <CSSTransition in={visible} classNames="overflow" timeout={250} unmountOnExit>
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
  visible: false,
  width: 300,
  height: 300
};

export default Drawer;
