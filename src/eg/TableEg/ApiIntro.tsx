import React from 'react';
import { Table, Title } from '../../lib';
import { TableData } from '../../lib/Table/Table';

const TextBody = [
  { 属性: 'data', 说明: '数据', 类型: 'TableData', 默认值: '' },
  { 属性: 'pagination', 说明: '是否分页展示', 类型: 'boolean', 默认值: 'false' },
  { 属性: 'moreTool', 说明: '展示快速翻页', 类型: 'boolean', 默认值: 'false' },
  { 属性: 'goTool', 说明: '允许输入页码', 类型: 'boolean', 默认值: 'false' },
  { 属性: 'statistic', 说明: '数据统计', 类型: 'boolean', 默认值: 'false' },
  { 属性: 'perPage', 说明: '每页展示多少条数据', 类型: 'number', 默认值: '10' }
];
const TextData: TableData = {
  header: ['属性', '说明', '类型', '默认值'],
  body: TextBody
};

const TitleBody = [
  { 属性: 'currentData', 说明: 'table数据', 类型: 'TableData', 默认值: '' },
  {
    属性: 'callback',
    说明: '翻页的回调函数（接受当前页码和跳过多少条数据两参数）',
    类型: 'Function',
    默认值: ''
  },
  { 属性: 'perPage', 说明: '每页展示多少条数据', 类型: 'number', 默认值: '10' },
  { 属性: 'totalData', 说明: '总数据', 类型: 'number', 默认值: '' },
  { 属性: 'loading', 说明: '处于加载中', 类型: 'boolean', 默认值: 'false' }
];
const TitleData: TableData = {
  header: ['属性', '说明', '类型', '默认值'],
  body: TitleBody
};

export const ApiIntro: React.FC = () => {
  return (
    <div className="interface">
      <Title level={4}>Table</Title>
      <Table data={TextData} />
      <Title level={4}>AsyncTable</Title>
      <Table data={TitleData} />
    </div>
  );
};
