import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';
import './index.scss';
import SuccessIcon from '../icons/success.svg';
import InfoIcon from '../icons/info.svg';
import WarningIcon from '../icons/warning.svg';
import ErrorIcon from '../icons/error.svg';
import LoadingIcon from '../icons/loading.svg';

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  type?: 'success' | 'info' | 'warning' | 'error' | 'loading';
  defineIcon?: React.ReactNode;
}

const Alert: React.FC<AlertProps> = (props) => {
  const { children, type, defineIcon, ...rest } = props;
  const render = () => {
    if (type === 'success' && !defineIcon) {
      return <SuccessIcon width="1em" height="1em" />;
    }
    if (type === 'info') {
      return <InfoIcon width="1em" height="1em" />;
    }
    if (type === 'warning') {
      return <WarningIcon width="1em" height="1em" />;
    }
    if (type === 'error') {
      return <ErrorIcon width="1em" height="1em" />;
    }
    if (type === 'loading') {
      return <LoadingIcon width="1em" height="1em" />;
    }
    if (defineIcon) {
      return defineIcon;
    }
  };
  return (
    <div>
      <div className={classNames(type, 'ui-alert-wrap')} {...rest}>
        <span className="icon">{render()}</span>
        <p className="content">{children}</p>
      </div>
    </div>
  );
};
Alert.defaultProps = {
  children: '',
  type: 'success',
  defineIcon: ''
};

export default Alert;
