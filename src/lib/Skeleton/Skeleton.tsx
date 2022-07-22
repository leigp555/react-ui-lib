import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { CommonStyle } from '../common/common';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  gap?: number;
}
const SkeletonStyled = styled(CommonStyle)`
  display: flex;
  flex-direction: column;
`;
const Skeleton: React.FC<Props> = (props) => {
  const { children, ...rest } = props;
  return <SkeletonStyled {...rest}>{children}</SkeletonStyled>;
};
Skeleton.defaultProps = {
  children: '',
  gap: 10
};

export default Skeleton;
