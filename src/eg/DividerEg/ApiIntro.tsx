import React from 'react';
import { Table } from '../../lib';
import { TableData } from '../../lib/Table/Table';

const dataBody = [
  { 属性: 'position', 说明: '文字位置', 类型: `'left' | 'right' | 'center'`, 默认值: 'center' },
  { 属性: 'offset', 说明: '向有偏移量', 类型: 'number', 默认值: 0 }
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
