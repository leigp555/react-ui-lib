import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { Omit } from '@reduxjs/toolkit/dist/tsHelpers';
import { CommonStyle } from '../common/common';
// 24/100
// 这个组件内的元素横向排列

interface Props extends HTMLAttributes<HTMLDivElement> {
  span?: number;
  offset?: number | 'auto';
  gap?: number;
  color?: string;
  bgc?: string;
  alignSelf?: 'center' | 'start' | 'end';
  justifySelf?: 'center' | 'start' | 'end' | 'space-between' | 'space-around';
  justify?: 'center' | 'start' | 'end' | 'space-between' | 'space-around';
  aline?: 'center' | 'start' | 'end';
  children?: React.ReactNode;
}
type PropsStyled = Omit<Props, 'children'>;

const ColStyled = styled(CommonStyle)`
  height: 100%;
  white-space: nowrap;
  display: flex;
  flex-wrap: nowrap;
  width: ${(props: PropsStyled) => `${props.span}%`};
  margin-left: ${(props: PropsStyled) => (props.offset === 'auto' ? 'auto' : `${props.offset}%`)};
`;

const Col: React.FC<Props> = (props) => {
  const { children, ...rest } = props;
  return <ColStyled {...rest}>{children}</ColStyled>;
};

Col.defaultProps = {
  span: 100,
  offset: 0,
  children: '',
  gap: 0,
  justify: 'start',
  aline: 'center',
  color: 'inherit',
  bgc: 'inherit',
  alignSelf: 'center',
  justifySelf: 'start'
};
export default Col;
