import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { createPortal } from 'react-dom';
import Button from '../Button/Button';
import './index.scss';
import CancelIcon from '../icons/cha.svg';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  title?: string;
  visible?: boolean;
  onOk?: () => void;
  onCancel?: () => void;
}

const Wrap = styled.div`
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ModalStyled = styled.div`
  box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.1);
  background-color: white;
  display: flex;
  flex-direction: column;
  min-width: 350px;
  max-width: 500px;
  padding: 10px 0;
  position: relative;
  > .cancelIcon {
    position: absolute;
    top: 18px;
    right: 18px;
    cursor: pointer;
  }
  > .title {
    padding: 10px 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  > .body {
    padding: 10px 20px;
  }
  > .action {
    align-self: end;
    padding: 10px 20px;
    display: flex;
    gap: 10px;
  }
`;
const Modal: React.FC<Props> = (props) => {
  const { children, title, visible, onOk, onCancel, ...rest } = props;
  return createPortal(
    <Wrap>
      <CSSTransition in={visible} classNames="box" timeout={1000} unmountOnExit>
        <ModalStyled {...rest}>
          <span className="cancelIcon" role="presentation" onClick={onCancel}>
            <CancelIcon width="1em" height="1em" />
          </span>
          <div className="title">{title}</div>
          <div className="body">{children}</div>
          <div className="action">
            <Button type="default" onClick={onCancel}>
              取消
            </Button>
            <Button onClick={onOk}>确定</Button>
          </div>
        </ModalStyled>
      </CSSTransition>
    </Wrap>,
    document.body
  );
};
Modal.defaultProps = {
  children: '',
  title: 'Title',
  visible: false,
  onOk: () => {},
  onCancel: () => {}
};

export default Modal;
