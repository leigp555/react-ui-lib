import React, { HTMLAttributes, useState } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import Button from '../Button/Button';
import Warning from '../icons/warning.svg';
import './index.scss';

interface Props extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  children?: React.ReactNode;
  okText?: string;
  cancelText?: string;
}

const PopConfirmStyled = styled.div`
  display: inline-block;
  position: relative;
  .text {
    display: flex;
    gap: 5px;
    white-space: nowrap;
  }
  .action {
    align-self: end;
    display: flex;
    gap: 10px;
  }
  > .pop {
    padding: 15px;
    box-shadow: 0 -2px 10px 2px rgba(0, 0, 0, 0.1);
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, calc(100% + 15px));
    display: flex;
    flex-direction: column;
    gap: 10px;
    z-index: 10;
    background-color: #ffffff;
    &:after {
      content: '';
      position: absolute;
      width: 12px;
      height: 12px;
      background-color: #ffffff;
      top: 0;
      left: 50%;
      transform: translate(-50%, -50%) rotate(45deg);
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      border-left: 1px solid rgba(0, 0, 0, 0.1);
    }
  }
`;
const PopConfirm: React.FC<Props> = (props) => {
  const { children, onConfirm, title, onCancel, okText, cancelText, ...rest } = props;
  const [isShow, setShow] = useState<boolean>(true);
  return (
    <div>
      <PopConfirmStyled {...rest}>
        <div onClick={() => setShow(true)} role="presentation" onBlur={() => setShow(false)}>
          {children}
        </div>
        <CSSTransition in={isShow} classNames="box" timeout={500} unmountOnExit>
          <div className="pop">
            <p className="text">
              <span>
                <Warning width="1em" height="1em" />
              </span>
              <span>{title}</span>
            </p>
            <div className="action">
              <Button
                type="default"
                onClick={() => {
                  setShow(false);
                  onCancel!();
                }}
              >
                {cancelText}
              </Button>
              <Button
                type="primary"
                onClick={() => {
                  setShow(false);
                  onConfirm!();
                }}
              >
                {okText}
              </Button>
            </div>
          </div>
        </CSSTransition>
      </PopConfirmStyled>
    </div>
  );
};
PopConfirm.defaultProps = {
  title: 'title',
  okText: '确定',
  cancelText: '取消',
  onConfirm: () => {},
  onCancel: () => {},
  children: ''
};

export default PopConfirm;
