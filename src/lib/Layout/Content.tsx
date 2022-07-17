import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { CommonStyle } from '../common/common';

interface Props extends HTMLAttributes<HTMLHeadElement> {
  height?: number | string;
  width?: number | string;
  bgc?: string;
  children?: React.ReactNode;
}
const ContentStyled = styled(CommonStyle)`
  display: flex;
  gap: 10px;
`;

const Content: React.FC<Props> = (props) => {
  const { children, ...rest } = props;
  return <ContentStyled {...rest}>{children}</ContentStyled>;
};
Content.defaultProps = {
  height: '100%',
  width: '100%',
  children: '',
  bgc: 'inherit'
};

export default Content;
