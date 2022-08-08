import React from 'react';
import { Table } from '../../lib';
import { TableData } from '../../lib/Table/Table';

const dataBody = [
  { 属性: 'percent', 说明: '默认进度', 类型: 'number', 默认值: '' },
  { 属性: 'finishColor', 说明: '完成状态的颜色', 类型: 'string', 默认值: '#1890ff' },
  { 属性: 'undoneColor', 说明: '未完成状态的颜色', 类型: 'string', 默认值: '#52c41a' },
  { 属性: 'format', 说明: '格式化', 类型: '(num: number) => string', 默认值: '' },
  { 属性: 'type', 说明: '圆形进度条或线型进度条', 类型: `'line' | 'circle'`, 默认值: 'line' },
  { 属性: 'dot', 说明: '完成进度条末尾圆点', 类型: 'boolean', 默认值: 'false' },
  { 属性: 'statistic', 说明: '进度统计', 类型: 'boolean', 默认值: 'false' }
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
