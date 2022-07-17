import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props extends HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}
// 元素横向排列
const FooterStyled = styled.div`
  display: flex;
  gap: 10px;
`;

const Footer: React.FC<Props> = (props) => {
  const { children, ...rest } = props;
  return <FooterStyled {...rest}>{children}</FooterStyled>;
};
Footer.defaultProps = {
  children: ''
};

export default Footer;
