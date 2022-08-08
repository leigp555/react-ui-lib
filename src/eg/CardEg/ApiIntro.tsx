import React from 'react';
import { Table } from '../../lib';
import { TableData } from '../../lib/Table/Table';

const dataBody = [
  { 属性: 'cardTitle', 说明: '标题', 类型: 'React.ReactNode', 默认值: '' },
  { 属性: 'action', 说明: '操作', 类型: 'React.ReactNode', 默认值: '' },
  { 属性: 'bordered', 说明: '边框', 类型: 'boolean', 默认值: 'false' }
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
