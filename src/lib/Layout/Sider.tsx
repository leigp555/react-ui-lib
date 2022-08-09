import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { CommonStyle } from '../common/common';

export interface SiderProps extends HTMLAttributes<HTMLHeadElement> {
  height?: number | string;
  width?: number | string;
  bgc?: string;
  direction?: 'column' | 'row';
  justify?: 'center' | 'start' | 'end' | 'space-between' | 'space-around';
  aline?: 'center' | 'start' | 'end';
  children?: React.ReactNode;
}
const SiderStyled = styled(CommonStyle)`
  flex-shrink: 0;
  height: 100%;
  //width: 100%;
  overflow-y: auto;
  &::-webkit-scrollbar {
    //整个滚动条的宽高设置
    width: 4px; //宽高只有一个能生效，如果是横向滚动条高度生效，纵向滚动条宽度生效
    height: 4px;
  }
  &::-webkit-scrollbar-thumb {
    //滚动条滑块的设置
    border-radius: 3px;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    background-color: #c3c3c3;
  }
  &::-webkit-scrollbar-track {
    //滚动条轨道设置
    background-color: #f1f1f1;
  }
`;

const Sider: React.FC<SiderProps> = (props) => {
  const { children, ...rest } = props;
  return <SiderStyled {...rest}>{children}</SiderStyled>;
};
Sider.defaultProps = {
  height: '100%',
  width: 'auto',
  children: '',
  bgc: 'inherit',
  direction: 'row',
  justify: 'start',
  aline: 'center'
};

export default Sider;
