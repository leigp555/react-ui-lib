import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { Omit } from '@reduxjs/toolkit/dist/tsHelpers';
import { CommonStyle } from '../common/common';

interface Props extends HTMLAttributes<HTMLHeadElement> {
  height?: number | string;
  width?: number | string;
  bgc?: string;
  children?: React.ReactNode;
  direction?: 'column' | 'row';
}
type PropsStyled = Omit<Props, 'children'>;

const SiderStyled = styled(CommonStyle)`
  display: flex;
  flex-direction: ${(props: PropsStyled) => props.direction};
  align-self: stretch;
`;

const Sider: React.FC<Props> = (props) => {
  const { children, ...rest } = props;
  return <SiderStyled {...rest}>{children}</SiderStyled>;
};
Sider.defaultProps = {
  height: '100%',
  width: '200px',
  children: '',
  bgc: 'inherit',
  direction: 'row'
};

export default Sider;
