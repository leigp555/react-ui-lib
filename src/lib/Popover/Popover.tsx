import React, { HTMLAttributes, ReactNode, useState } from 'react';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import './index.scss';

type Position =
  | 'topLeft'
  | 'topCenter'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomCenter'
  | 'bottomRight'
  | 'leftTop'
  | 'leftCenter'
  | 'leftBottom'
  | 'rightTop'
  | 'rightCenter'
  | 'rightBottom';

interface Props extends HTMLAttributes<HTMLDivElement> {
  position?: Position;
  content: ReactNode;
  title: string;
  trigger?: 'hover' | 'click';
  children?: React.ReactNode;
}

const Popover: React.FC<Props> = (props) => {
  const { children, position, content, title, trigger, ...rest } = props;
  const [isShow, setShow] = useState<boolean>(false);
  return (
    <div>
      <div
        role="presentation"
        {...rest}
        className="wrap"
        onClick={() => {
          if (trigger === 'click') setShow(true);
        }}
        onBlur={() => {
          if (trigger === 'click') setShow(false);
        }}
        onMouseOver={() => {
          if (trigger === 'hover') setShow(true);
        }}
        onMouseOut={() => {
          if (trigger === 'hover') setShow(false);
        }}
      >
        <CSSTransition in={isShow} classNames="box" timeout={250} unmountOnExit>
          <div className={classNames('tip', position)}>
            <div className="tipWrap">
              <span className="title">{title}</span>
              <div className="content"> {content}</div>
            </div>
          </div>
        </CSSTransition>

        <div>{children}</div>
      </div>
    </div>
  );
};
Popover.defaultProps = {
  position: 'topCenter',
  trigger: 'click',
  children: ''
};

export default Popover;
