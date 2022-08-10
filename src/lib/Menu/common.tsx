import React, { Dispatch, ReactElement, ReactNode, SetStateAction } from 'react';

export const common = (setOrder: Dispatch<SetStateAction<number>> | null) => {
  return (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.target as HTMLDivElement;
    const orderStr = el.getAttribute('data-order');
    if (orderStr) {
      el.classList.add('active');
      const order = parseInt(orderStr, 10);
      if (setOrder) setOrder(order);
    }
  };
};

// 不知道react的虚拟节点什么类型所以扩充vNode类型来消除ts警告
type VNode = ReactElement & { type: { name: string } };

export const nodeList = (children: ReactNode) => {
  const labelNode: VNode[] = [];
  const otherNode: VNode[] = [];
  React.Children.map(children, (child) => {
    const vNode = child as VNode;
    if (React.isValidElement(vNode) && vNode.props.name === 'Label') {
      labelNode.push(vNode);
    } else {
      otherNode.push(vNode);
    }
  });
  return { labelNode, otherNode };
};
