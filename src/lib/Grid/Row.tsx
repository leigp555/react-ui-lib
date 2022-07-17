import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

// 这个组件内的元素纵向排列
interface Props extends HTMLAttributes<HTMLDivElement> {
  gap?: number;
  color?: string;
  bgc?: string;
  height?: number | string;
  justify?: 'center' | 'start' | 'end' | 'space-between' | 'space-around';
  aline?: 'center' | 'start' | 'end';
  alignSelf?: 'center' | 'start' | 'end';
  justifySelf?: 'center' | 'start' | 'end' | 'space-between' | 'space-around';
  children: React.ReactNode;
}

type PropsStyled = Omit<Props, 'children'>;
const RowStyled = styled.div`
  white-space: nowrap;
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  height: ${(props: PropsStyled) =>
    typeof props.height === 'number' ? `${props.height}px` : props.height};
  background-color: ${(props: PropsStyled) => props.bgc};
  color: ${(props: PropsStyled) => props.color};
  gap: ${(props: PropsStyled) => `${props.gap}px`};
  justify-content: ${(props: PropsStyled) => props.justify};
  align-items: ${(props: PropsStyled) => props.aline};
  align-self: ${(props: PropsStyled) => props.alignSelf};
  justify-self: ${(props: PropsStyled) => props.justifySelf};
  padding: 10px;
`;

const Row: React.FC<Props> = (props) => {
  const { children, ...rest } = props;
  return <RowStyled {...rest}>{children}</RowStyled>;
};
Row.defaultProps = {
  gap: 0,
  height: 40,
  color: 'inherit',
  bgc: 'inherit',
  justify: 'start',
  aline: 'center',
  alignSelf: 'center',
  justifySelf: 'start'
};

export default Row;
