import React from 'react';
import { Table } from '../../lib';
import { TableData } from '../../lib/Table/Table';

const dataBody = [
  {
    属性: 'type',
    说明: 'alert类型',
    类型: `'success' | 'info' | 'warning' | 'error' | 'loading'`,
    默认值: 'success'
  },
  { 属性: 'defineIcon', 说明: '自定义图标', 类型: 'React.ReactNode', 默认值: '' }
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
