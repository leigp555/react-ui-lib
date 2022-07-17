import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { CommonStyle } from '../common/common';

interface Props extends HTMLAttributes<HTMLHeadElement> {
  height?: number | string;
  width?: number | string;
  bgc?: string;
  children?: React.ReactNode;
}
const FooterStyled = styled(CommonStyle)`
  display: flex;
  gap: 10px;
`;

const Footer: React.FC<Props> = (props) => {
  const { children, ...rest } = props;
  return <FooterStyled {...rest}>{children}</FooterStyled>;
};
Footer.defaultProps = {
  height: '100%',
  width: '100%',
  children: '',
  bgc: 'inherit'
};

export default Footer;
