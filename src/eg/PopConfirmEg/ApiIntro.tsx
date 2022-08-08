import React from 'react';
import { Table } from '../../lib';
import { TableData } from '../../lib/Table/Table';

const dataBody = [
  { 属性: 'title', 说明: '标题', 类型: 'string', 默认值: 'false' },
  { 属性: 'onConfirm', 说明: '确认的回调函数', 类型: '() => void', 默认值: '' },
  { 属性: 'onCancel', 说明: '取消的回调函数', 类型: '() => void', 默认值: '' },
  { 属性: 'okText', 说明: '确认的文本', 类型: 'string', 默认值: '' },
  { 属性: 'cancelText', 说明: '取消的文本', 类型: 'string', 默认值: '' },
  { 属性: 'position', 说明: '位置', 类型: `'top' | 'bottom' | 'left' | 'right'`, 默认值: 'top' }
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
