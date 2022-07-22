import React, { HTMLAttributes } from 'react';
import styled, { keyframes } from 'styled-components';
import LoadIcon from '../icons/loading.svg';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  loading?: boolean;
}
const LoadingStyled = styled.div`
  position: relative;
`;

const loadAction = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;

const LoadWrap = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  > .inner {
    animation: ${loadAction} infinite 1s linear;
  }
`;
const Loading: React.FC<Props> = (props) => {
  const { children, loading, ...rest } = props;
  return (
    <LoadingStyled {...rest}>
      <LoadWrap style={{ display: loading ? 'block' : 'none' }}>
        <div className="inner">
          <LoadIcon fill="#1890ff" width="1.5em" height="1.5em" />
        </div>
      </LoadWrap>
      {children}
    </LoadingStyled>
  );
};
Loading.defaultProps = {
  children: '',
  loading: true
};

export default Loading;
