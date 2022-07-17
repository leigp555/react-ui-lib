import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

// 元素纵向排列
const LayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}
const Layout: React.FC<Props> = (props) => {
  const { children, ...rest } = props;
  return <LayoutStyled {...rest}>{children}</LayoutStyled>;
};
Layout.defaultProps = {
  children: ''
};

export default Layout;
