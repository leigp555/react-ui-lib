import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { CommonStyle } from '../common/common';

export interface ContentProps extends HTMLAttributes<HTMLHeadElement> {
  height?: number | string;
  width?: number | string;
  bgc?: string;
  direction?: 'column' | 'row';
  justify?: 'center' | 'start' | 'end' | 'space-between' | 'space-around';
  aline?: 'center' | 'start' | 'end';
  children?: React.ReactNode;
}
type PropsStyled = Omit<ContentProps, 'children'>;
const ContentStyled = styled(CommonStyle)`
  flex-grow: 10;
  display: flex;
  height: 200px;
  //border: 10px solid red;
  flex-direction: ${(props: PropsStyled) => props.direction};
`;

const Content: React.FC<ContentProps> = (props) => {
  const { children, ...rest } = props;
  return <ContentStyled {...rest}>{children}</ContentStyled>;
};
Content.defaultProps = {
  height: '100%',
  width: '100%',
  children: '',
  bgc: 'inherit',
  direction: 'row',
  justify: 'start',
  aline: 'start'
};

export default Content;
