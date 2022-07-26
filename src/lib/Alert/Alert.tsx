import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import './index.scss';
import SuccessIcon from '../icons/success.svg';
import InfoIcon from '../icons/info.svg';
import WarningIcon from '../icons/warning.svg';
import ErrorIcon from '../icons/error.svg';
import LoadingIcon from '../icons/loading.svg';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  type?: 'success' | 'info' | 'warning' | 'error' | 'loading';
  defineIcon?: React.ReactNode;
}
const AlertStyled = styled.div`
  max-width: 400px;
  min-width: 100px;
  padding: 10px 15px;
  display: inline-flex;
  align-items: start;
  gap: 10px;
  &.success {
    background-color: #e6f7ff;
  }
  &.info {
    background-color: #f6ffed;
  }
  &.warning {
    background-color: #fffbe6;
  }
  &.error {
    background-color: #fff2f0;
  }
  &.loading {
    background-color: #e6f7ff;
  }
  > .icon {
    display: flex;
    align-items: center;
  }
  > .content {
    display: flex;
    align-items: center;
  }
`;

const Alert: React.FC<Props> = (props) => {
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
      <AlertStyled className={type} {...rest}>
        <span className="icon">{render()}</span>
        <p className="content">{children}</p>
      </AlertStyled>
    </div>
  );
};
Alert.defaultProps = {
  children: '',
  type: 'success',
  defineIcon: ''
};

export default Alert;
