import React from 'react';
import { Table } from '../../lib';
import { TableData } from '../../lib/Table/Table';

const dataBody = [
  { 属性: 'size', 说明: '间距大小', 类型: 'number/string', 默认值: '8' },
  { 属性: 'align', 说明: '对齐方式', 类型: 'start | center | end | baseline', 默认值: 'start' },
  { 属性: 'direction', 说明: '排列方式', 类型: 'row | column', 默认值: 'row' }
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
