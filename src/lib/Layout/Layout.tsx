import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

export interface LayoutProps extends HTMLAttributes<HTMLDivElement> {
  gap?: number;
  bgc?: string;
  children?: React.ReactNode;
}
type PropsStyled = Omit<LayoutProps, 'children'>;
// 元素纵向排列
const LayoutStyled = styled.div`
  display: flex;
  flex-grow: 10;
  flex-direction: column;
  gap: ${(props: PropsStyled) => `${props.gap}px`};
  background-color: ${(props: PropsStyled) => props.bgc};
`;

const Layout: React.FC<LayoutProps> = (props) => {
  const { children, ...rest } = props;
  return <LayoutStyled {...rest}>{children}</LayoutStyled>;
};
Layout.defaultProps = {
  children: '',
  gap: 0,
  bgc: 'inherit'
};

export default Layout;
