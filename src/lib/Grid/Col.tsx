import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { Omit } from '@reduxjs/toolkit/dist/tsHelpers';
// 24/100
// 这个组件内的元素横向排列

interface Props extends HTMLAttributes<HTMLDivElement> {
  span?: number;
  offset?: number;
  gap?: number;
  justify?: 'center' | 'start' | 'end' | 'space-between' | 'space-around';
  aline?: 'center' | 'start' | 'end';
  children?: React.ReactNode;
}
type PropsStyled = Omit<Props, 'children'>;

const ColStyled = styled.div`
  height: 40px;
  display: flex;
  width: ${(props: PropsStyled) => `${props.span}%`};
  margin-left: ${(props: PropsStyled) => `${props.offset}%`};
  gap: ${(props: PropsStyled) => `${props.gap}px`};
  justify-content: ${(props: PropsStyled) => props.justify};
  align-items: ${(props: PropsStyled) => props.aline};
`;

const Col: React.FC<Props> = (props) => {
  const { children, ...rest } = props;
  return <ColStyled {...rest}>{children}</ColStyled>;
};

Col.defaultProps = {
  span: 100,
  offset: 0,
  children: '',
  gap: 10,
  justify: 'center',
  aline: 'center'
};
export default Col;
