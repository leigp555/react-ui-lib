import React from 'react';
import { Table } from '../../lib';
import { TableData } from '../../lib/Table/Table';

const dataBody = [
  { 属性: 'defaultPage', 说明: '默认为第几页', 类型: 'number', 默认值: '1' },
  { 属性: 'perPage', 说明: '每页展示多少条数据', 类型: 'number', 默认值: '5' },
  { 属性: 'moreTool', 说明: '快速翻页', 类型: 'boolean', 默认值: 'false' },
  { 属性: 'goTool', 说明: '允许输入页码', 类型: 'boolean', 默认值: 'false' },
  { 属性: 'statistic', 说明: '数据统计', 类型: 'boolean', 默认值: 'false' },
  {
    属性: 'callback',
    说明: '翻页时执行的回调函数',
    类型: '接受三个参数（currentPage:number, start: number, end: number）',
    默认值: 'null'
  },
  { 属性: 'totalSrc', 说明: '总共有多少条数据', 类型: 'number', 默认值: '必要项' }
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
