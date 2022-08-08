import React from 'react';
import { Table } from '../../lib';
import { TableData } from '../../lib/Table/Table';

const dataBody = [
  { 属性: 'tips', 说明: '提示内容', 类型: 'string[]', 默认值: '[]' },
  { 属性: 'value', 说明: '输入框内容', 类型: 'string', 默认值: '' },
  { 属性: 'callback', 说明: '点击提示内容后的回调', 类型: 'Function', 默认值: '' }
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
