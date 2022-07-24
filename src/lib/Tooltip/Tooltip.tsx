import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';
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
  return (
    <div>
      <div {...rest} className="wrap">
        <span className={classNames('tip', position)}>{tip}</span>
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
