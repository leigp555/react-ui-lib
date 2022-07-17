import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { CommonStyle } from '../common/common';

interface Props extends HTMLAttributes<HTMLHeadElement> {
  height?: number | string;
  width?: number | string;
  bgc?: string;
  children?: React.ReactNode;
}
const HeaderStyled = styled(CommonStyle)`
  display: flex;
  gap: 10px;
`;

const Header: React.FC<Props> = (props) => {
  const { children, ...rest } = props;
  return <HeaderStyled {...rest}>{children}</HeaderStyled>;
};
Header.defaultProps = {
  height: 50,
  width: '100%',
  children: '',
  bgc: 'inherit'
};

export default Header;
