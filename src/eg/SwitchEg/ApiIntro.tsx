import React from 'react';
import { Table } from '../../lib';
import { TableData } from '../../lib/Table/Table';

const dataBody = [
  { 属性: 'defaultChecked', 说明: '初始状态（开/关）', 类型: 'boolean', 默认值: 'false' },
  { 属性: 'onColor', 说明: '开状态下的背景颜色', 类型: 'string', 默认值: '#1890ff' },
  { 属性: 'offColor', 说明: '关状态下的背景颜色', 类型: 'string', 默认值: '#dcdfe6' },
  { 属性: 'callback', 说明: '开关切换时的回调函数', 类型: 'Function', 默认值: 'null' }
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
