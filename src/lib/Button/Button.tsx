import React, { HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';
import LoadingIcon from '../icons/loading2.svg';

import './index.scss';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  radius?: boolean;
  disabled?: boolean;
  size?: 'big' | 'normal' | 'small';
  type?: 'primary' | 'text' | 'link' | 'dashed' | 'default';
  loading?: boolean;
  children?: ReactNode;
}
const Button: React.FC<ButtonProps> = (props) => {
  const { radius, disabled, type, children, className, loading, size, ...rest } = props;
  return (
    <button
      {...rest}
      disabled={disabled}
      className={classNames(
        'ui-button',
        type,
        className,
        radius ? 'radius' : '',
        disabled ? 'disabled' : '',
        size,
        loading ? 'loading' : ''
      )}
    >
      {loading ? (
        <>
          <span className="ui-button-icon">
            <LoadingIcon width="1em" height="1em" />
          </span>
          {children}
        </>
      ) : (
        children
      )}
    </button>
  );
};

Button.defaultProps = {
  radius: false,
  type: 'primary',
  disabled: false,
  children: '按钮',
  size: 'normal',
  loading: false
};

export default Button;
