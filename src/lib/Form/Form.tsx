import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { CommonStyle } from '../common/common';

interface Props extends HTMLAttributes<HTMLDivElement> {
  gap?: number | string;
  children?: React.ReactNode;
}
const FromStyled = styled(CommonStyle)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const From: React.FC<Props> = (props) => {
  const { children, ...rest } = props;
  return <FromStyled {...rest}>{children}</FromStyled>;
};
From.defaultProps = {
  gap: '1.2em',
  children: ''
};

export default From;
