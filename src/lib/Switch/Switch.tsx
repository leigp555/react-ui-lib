import React, { HTMLAttributes, useRef, useState } from 'react';
import classNames from 'classnames';
import './index.scss';

interface Props extends HTMLAttributes<HTMLDivElement> {
  defaultChecked?: boolean;
  onColor?: string;
  offColor?: string;
  callback?: (checked: boolean) => void;
  children?: React.ReactNode;
}

const Switch: React.FC<Props> = (props) => {
  const { children, onColor, offColor, defaultChecked, callback, ...rest } = props;
  const [selected, setSelected] = useState<boolean>(defaultChecked!);
  const wrapRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const selectedChange = () => {
    callback!(!selected);
    setSelected(!selected);
  };
  return (
    <div
      role="presentation"
      className={classNames('gulu-switch')}
      style={{ backgroundColor: `${selected ? onColor : offColor}` }}
      ref={wrapRef}
      {...rest}
      onClick={selectedChange}
    >
      <div
        ref={innerRef}
        className={classNames('inner', 'gulu-switch-inner', `${selected ? 'gulu-switch-on' : ''}`)}
      />
    </div>
  );
};

Switch.defaultProps = {
  defaultChecked: false,
  onColor: '#1890ff',
  offColor: '#dcdfe6',
  callback: () => {},
  children: ''
};

export default Switch;
