import React from 'react';
import { Table } from '../../lib';
import { TableData } from '../../lib/Table/Table';

const dataBody = [
  { 属性: 'count', 说明: '总共多少条内容', 类型: 'number', 默认值: '0' },
  { 属性: 'overflowCount', 说明: '超过多少条内容显示+', 类型: 'number', 默认值: '10' },
  { 属性: 'dot', 说明: '是否显示成小红点', 类型: 'boolean', 默认值: 'false' }
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
