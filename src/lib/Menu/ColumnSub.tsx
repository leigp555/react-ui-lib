import React, { HTMLAttributes, ReactElement, useContext } from 'react';
import styled from 'styled-components';
import { columnMenuCtx } from './ColunmMenu';

interface Props extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  children?: React.ReactNode;
}
// 不知道react的虚拟节点什么类型所以扩充vNode类型来消除ts警告
type VNode = ReactElement & { type: { name: string } };

const SubMenuStyled = styled.div`
  display: flex;
  > .wrap {
    display: inline-flex;
    min-width: 150px;
    flex-direction: column;
    > .content {
      background-color: #fff;
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
  const getOrder = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.target as HTMLDivElement;
    const orderStr = el.getAttribute('data-order');
    if (orderStr) {
      const order = parseInt(orderStr, 10);
      callback(order);
    }
  };
  const render = () => {
    const labelNode: VNode[] = [];
    const otherNode: VNode[] = [];
    React.Children.map(children, (child) => {
      const vNode = child as VNode;
      if (React.isValidElement(vNode) && vNode.type.name === 'Label') {
        labelNode.push(vNode);
      } else {
        otherNode.push(vNode);
      }
    });
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
