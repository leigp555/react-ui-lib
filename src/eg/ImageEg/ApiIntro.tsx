import React from 'react';
import { Table } from '../../lib';
import { TableData } from '../../lib/Table/Table';

const dataBody = [
  { 属性: 'width', 说明: '图片宽度', 类型: 'number', 默认值: '100' },
  { 属性: 'src', 说明: '图片链接', 类型: 'string', 默认值: '' }
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
