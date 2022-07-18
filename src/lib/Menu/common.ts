import React, { MutableRefObject } from 'react';

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
