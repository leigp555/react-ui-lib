import React, { HTMLAttributes, useContext, useRef } from 'react';
import styled from 'styled-components';
import { columnMenuCtx } from './ColunmMenu';
import { common, nodeList } from './common';

interface Props extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  children?: React.ReactNode;
}
const SubMenuStyled = styled.div`
  display: inline-flex;
  > .wrap {
    display: inline-flex;
    min-width: 150px;
    flex-direction: column;
    > .content {
      background-color: #fff;
      padding: 10px 5px;
      box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
    }
    > .label {
      cursor: pointer;
      white-space: nowrap;
    }
  }
`;
const ColumnSub: React.FC<Props> = (props) => {
  const { children, label, ...rest } = props;
  const { callback } = useContext(columnMenuCtx);
  const activeRef = useRef<HTMLDivElement | null>(null);
  const getOrder = (e: React.MouseEvent<HTMLDivElement>) => common(activeRef, callback)(e);
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
  label: '导航',
  children: ''
};

export default ColumnSub;
