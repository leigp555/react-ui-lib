import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props extends HTMLAttributes<HTMLDivElement> {
  gap?: number;
  bgc?: string;
  children?: React.ReactNode;
}
type PropsStyled = Omit<Props, 'children'>;
// 元素纵向排列
const LayoutStyled = styled.div`
  display: flex;
  flex-grow: 10;
  flex-direction: column;
  gap: ${(props: PropsStyled) => `${props.gap}px`};
  background-color: ${(props: PropsStyled) => props.bgc};
`;

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}
const Layout: React.FC<Props> = (props) => {
  const { children, ...rest } = props;
  return <LayoutStyled {...rest}>{children}</LayoutStyled>;
};
Layout.defaultProps = {
  children: '',
  gap: 0,
  bgc: 'inherit'
};

export default Layout;
