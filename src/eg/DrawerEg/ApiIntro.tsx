import React from 'react';
import { Table } from '../../lib';
import { TableData } from '../../lib/Table/Table';

const dataBody = [
  { 属性: 'title', 说明: '标题', 类型: 'string', 默认值: '' },
  {
    属性: 'position',
    说明: '弹出位置',
    类型: `'left' | 'right' | 'top' | 'bottom'`,
    默认值: 'right'
  },
  { 属性: 'visible', 说明: '是否可见', 类型: 'boolean', 默认值: 'false' },
  { 属性: 'onClose', 说明: '关闭时执行的回调', 类型: 'Function', 默认值: '' },
  { 属性: 'width', 说明: '弹出宽', 类型: 'number', 默认值: '300' },
  { 属性: 'height', 说明: '弹出高', 类型: 'number', 默认值: '300' }
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
