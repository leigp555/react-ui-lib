import React from 'react';
import styled from 'styled-components';

// 这个组件内的元素纵向排列
type Props = {
  gap?: number;
  justify?: 'center' | 'start' | 'end' | 'space-between' | 'space-around';
  aline?: 'center' | 'start' | 'end';
  children: React.ReactNode;
};

type PropsStyled = Omit<Props, 'children'>;
const RowStyled = styled.div`
  display: flex;
  width: 100%;
  background-color: inherit;
  flex-wrap: nowrap;
  gap: ${(props: PropsStyled) => `${props.gap}px`};
  justify-content: ${(props: PropsStyled) => props.justify};
  align-items: ${(props: PropsStyled) => props.aline};
  padding: 10px;
`;

const Row: React.FC<Props> = (props) => {
  const { children, ...rest } = props;
  return <RowStyled {...rest}>{children}</RowStyled>;
};
Row.defaultProps = {
  gap: 0,
  justify: 'start',
  aline: 'center'
};

export default Row;
