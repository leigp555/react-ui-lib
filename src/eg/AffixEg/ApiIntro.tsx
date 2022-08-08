import React from 'react';
import { Table } from '../../lib';
import { TableData } from '../../lib/Table/Table';

const dataBody = [
  {
    属性: 'offsetTop',
    说明: '距离顶部多少时开始固钉',
    类型: 'HTMLElement',
    默认值: 'document.body'
  },
  { 属性: 'container', 说明: '滑动的容器', 类型: 'number', 默认值: '0' },
  { 属性: 'rowPosition', 说明: '水平位置', 类型: `'start' | 'center' | 'end'`, 默认值: 'start' }
];
const data: TableData = {
  header: ['属性', '说明', '类型', '默认值'],
  body: dataBody
};

export const ApiIntro: React.FC = () => {
  return (
    <div className="interface">
      <Table data={data} />
    </div>
  );
};
