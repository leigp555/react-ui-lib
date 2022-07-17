import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { Omit } from '@reduxjs/toolkit/dist/tsHelpers';
import { CommonStyle } from '../common/common';

interface Props extends HTMLAttributes<HTMLHeadElement> {
  height?: number | string;
  width?: number | string;
  bgc?: string;
  children?: React.ReactNode;
  direction?: 'column' | 'row';
}
type PropsStyled = Omit<Props, 'children'>;
const FooterStyled = styled(CommonStyle)`
  display: flex;
  flex-direction: ${(props: PropsStyled) => props.direction};
`;

const Footer: React.FC<Props> = (props) => {
  const { children, ...rest } = props;
  return <FooterStyled {...rest}>{children}</FooterStyled>;
};
Footer.defaultProps = {
  height: '100%',
  width: '100%',
  children: '',
  bgc: 'inherit',
  direction: 'row'
};

export default Footer;
