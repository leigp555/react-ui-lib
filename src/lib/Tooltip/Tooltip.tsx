import React, { HTMLAttributes, useState } from 'react';
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
  tip?: string;
  children?: React.ReactNode;
}

const Tooltip: React.FC<Props> = (props) => {
  const { children, position, tip, ...rest } = props;
  const [isShow, setShow] = useState<boolean>(false);
  return (
    <div>
      <div
        role="presentation"
        {...rest}
        className="wrap"
        onMouseOver={() => {
          setShow(true);
        }}
        onMouseOut={() => setShow(false)}
      >
        <CSSTransition in={isShow} classNames="box" timeout={500} unmountOnExit>
          <span className={classNames('tip', position)}>{tip}</span>
        </CSSTransition>

        <div>{children}</div>
      </div>
    </div>
  );
};
Tooltip.defaultProps = {
  position: 'topCenter',
  tip: '提示内容',
  children: ''
};

export default Tooltip;
