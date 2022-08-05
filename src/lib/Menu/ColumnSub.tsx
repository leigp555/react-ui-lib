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
  > .wrap {
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
