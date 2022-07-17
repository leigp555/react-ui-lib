import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props extends HTMLAttributes<HTMLHeadElement> {
  children?: React.ReactNode;
}
// 元素横向排列
const HeaderStyled = styled.div`
  display: flex;
  gap: 10px;
`;

const Header: React.FC<Props> = (props) => {
  const { children, ...rest } = props;
  return <HeaderStyled {...rest}>{children}</HeaderStyled>;
};
Header.defaultProps = {
  children: ''
};

export default Header;
