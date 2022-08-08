import React from 'react';
import { Table } from '../../lib';
import { TableData } from '../../lib/Table/Table';

const dataBody = [
  { 属性: 'title', 说明: '标题', 类型: 'string', 默认值: '' },
  { 属性: 'visible', 说明: '显示', 类型: 'boolean', 默认值: 'false' },
  { 属性: 'onOk', 说明: '确定执行回调', 类型: ' () => void', 默认值: '' },
  { 属性: 'onCancel', 说明: '取消执行回调', 类型: ' () => void', 默认值: '' },
  { 属性: 'mask', 说明: '遮罩', 类型: 'boolean', 默认值: 'true' }
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
