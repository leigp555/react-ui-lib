import React from 'react';
import { Table } from '../../lib';
import { TableData } from '../../lib/Table/Table';

const dataBody = [
  {
    属性: 'status',
    说明: '空状态类型',
    类型: `'success' | 'warning' | 'error' | '404'`,
    默认值: 'false'
  },
  { 属性: 'gap', 说明: '间距', 类型: 'number', 默认值: '50' },
  { 属性: 'title', 说明: '标题', 类型: 'string', 默认值: '' },
  { 属性: 'subTitle', 说明: '副标题', 类型: 'string', 默认值: '' }
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
