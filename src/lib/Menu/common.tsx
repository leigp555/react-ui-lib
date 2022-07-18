import React, { MutableRefObject, ReactElement, ReactNode } from 'react';

export const common = (
  activeRef: MutableRefObject<HTMLDivElement | null>,
  callback: (key: number) => void
) => {
  return (e: React.MouseEvent<HTMLDivElement>) => {
    if (activeRef.current) {
      // eslint-disable-next-line no-param-reassign
      activeRef.current.style.color = 'inherit';
    }
    const el = e.target as HTMLDivElement;
    const orderStr = el.getAttribute('data-order');
    if (orderStr) {
      // eslint-disable-next-line no-param-reassign,@typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line no-param-reassign
      activeRef.current = el;
      el.style.color = '#1890ff';
      const order = parseInt(orderStr, 10);
      callback(order);
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
    if (React.isValidElement(vNode) && vNode.type.name === 'Label') {
      labelNode.push(vNode);
    } else {
      otherNode.push(vNode);
    }
  });
  return { labelNode, otherNode };
};
