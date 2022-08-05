import React, { HTMLAttributes, ReactNode } from 'react';

import classNames from 'classnames';
import './index.scss';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  radius?: boolean;
  disabled?: boolean;
  type?: 'primary' | 'text' | 'link' | 'dashed' | 'default';
  children?: ReactNode;
}
const Button: React.FC<ButtonProps> = (props) => {
  const { radius, disabled, type, children, className, ...rest } = props;
  return (
    <button
      {...rest}
      disabled={disabled}
      className={classNames(
        'ui-button',
        type,
        className,
        radius ? 'radius' : '',
        disabled ? 'disabled' : ''
      )}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  radius: false,
  type: 'primary',
  disabled: false,
  children: '按钮'
};

export default Button;
