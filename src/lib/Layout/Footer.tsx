import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { CommonStyle } from '../common/common';

export interface FooterProps extends HTMLAttributes<HTMLHeadElement> {
  height?: number | string;
  width?: number | string;
  bgc?: string;
  justify?: 'center' | 'start' | 'end' | 'space-between' | 'space-around';
  aline?: 'center' | 'start' | 'end';
  direction?: 'column' | 'row';
  children?: React.ReactNode;
}
type PropsStyled = Omit<FooterProps, 'children'>;
const FooterStyled = styled(CommonStyle)`
  display: flex;
  flex-direction: ${(props: PropsStyled) => props.direction};
`;

const Footer: React.FC<FooterProps> = (props) => {
  const { children, ...rest } = props;
  return <FooterStyled {...rest}>{children}</FooterStyled>;
};
Footer.defaultProps = {
  height: '100%',
  width: '100%',
  children: '',
  bgc: 'inherit',
  direction: 'row',
  justify: 'start',
  aline: 'center'
};

export default Footer;
