import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { CommonStyle } from '../common/common';

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  gap?: number;
  loading?: boolean;
  active?: boolean;
}

const SkeletonStyled = styled(CommonStyle)`
  flex-direction: column;
`;
const Skeleton: React.FC<SkeletonProps> = (props) => {
  const { children, active, loading, ...rest } = props;
  return (
    <SkeletonStyled style={{ display: loading ? 'flex' : 'none' }} {...rest}>
      {children}
    </SkeletonStyled>
  );
};
Skeleton.defaultProps = {
  loading: true,
  active: true,
  children: '',
  gap: 10
};

export default Skeleton;
