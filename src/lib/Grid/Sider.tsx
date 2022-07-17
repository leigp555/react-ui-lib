import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { CommonStyle } from '../common/common';

interface Props extends HTMLAttributes<HTMLHeadElement> {
  height?: number | string;
  width?: number | string;
  bgc?: string;
  children?: React.ReactNode;
}
const SiderStyled = styled(CommonStyle)`
  display: flex;
  gap: 10px;
`;

const Sider: React.FC<Props> = (props) => {
  const { children, ...rest } = props;
  return <SiderStyled {...rest}>{children}</SiderStyled>;
};
Sider.defaultProps = {
  height: '100%',
  width: '200px',
  children: '',
  bgc: 'inherit'
};

export default Sider;
