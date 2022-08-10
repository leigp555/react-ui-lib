import React, { HTMLAttributes, useContext } from 'react';
import styled from 'styled-components';
import { columnMenuCtx } from './ColumnMenu';
import { common, nodeList } from './common';

export interface ColumnSubProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  children?: React.ReactNode;
}
const SubMenuStyled = styled.div`
  flex-grow: 10;
  border: 1px solid rgba(100, 100, 100, 0.2);
  overflow-y: auto;
  overflow-x: hidden;
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
  > .wrap {
    width: 100%;
    height: 100%;
    min-width: 150px;

    > .content {
      background-color: #fff;
      height: 100%;
      padding: 10px 0;
      width: 100%;
      border: none;
    }
    > .label {
      cursor: pointer;
      white-space: nowrap;
    }
  }
`;
const ColumnSub: React.FC<ColumnSubProps> = (props) => {
  const { children, label, ...rest } = props;
  const { setOrder } = useContext(columnMenuCtx);
  const getOrder = (e: React.MouseEvent<HTMLDivElement>) => common(setOrder)(e);
  const render = () => {
    const { labelNode, otherNode } = nodeList(children);
    return (
      <>
        <span className="label">{labelNode}</span>
        <div
          className="content"
          role="presentation"
          onClick={(e: React.MouseEvent<HTMLDivElement>) => getOrder(e)}
        >
          {otherNode}
        </div>
      </>
    );
  };
  return (
    <SubMenuStyled {...rest}>
      <div className="wrap">{render()}</div>
    </SubMenuStyled>
  );
};
ColumnSub.defaultProps = {
  label: '',
  children: ''
};

export default ColumnSub;
