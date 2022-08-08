import React from 'react';
import { Table, Title } from '../../lib';
import { TableData } from '../../lib/Table/Table';

const RowBody = [
  { 属性: 'height', 说明: '头部高度', 类型: 'number|string', 默认值: '100%' },
  { 属性: 'gap', 说明: '垂直间距', 类型: 'number', 默认值: '0' },
  { 属性: 'bgc', 说明: '背景颜色', 类型: 'string', 默认值: 'inherit' },
  { 属性: 'color', 说明: '字体颜色', 类型: 'string', 默认值: 'inherit' },
  { 属性: 'direction', 说明: '纵向或横向排列', 类型: 'row | column', 默认值: 'row' },
  {
    属性: 'justify',
    说明: '对齐方式',
    类型: ` 'center' | 'start' | 'end' | 'space-between' | 'space-around'`,
    默认值: 'start'
  },
  {
    属性: 'aline',
    说明: '对齐方式',
    类型: ` 'center' | 'start' | 'end' | 'space-between' | 'space-around'`,
    默认值: 'center'
  }
];
const RowData: TableData = {
  header: ['属性', '说明', '类型', '默认值'],
  body: RowBody
};

const ColBody = [
  { 属性: 'span', 说明: '宽度百分比', 类型: 'number', 默认值: '100' },
  { 属性: 'offset', 说明: '向右偏移百分比', 类型: 'number | "auto"', 默认值: '0' },
  { 属性: 'gap', 说明: '垂直间距', 类型: 'number', 默认值: '0' },
  { 属性: 'bgc', 说明: '背景颜色', 类型: 'string', 默认值: 'inherit' },
  { 属性: 'color', 说明: '字体颜色', 类型: 'string', 默认值: 'inherit' },
  { 属性: 'direction', 说明: '纵向或横向排列', 类型: 'row | column', 默认值: 'row' },
  {
    属性: 'justify',
    说明: '对齐方式',
    类型: ` 'center' | 'start' | 'end' | 'space-between' | 'space-around'`,
    默认值: 'start'
  },
  {
    属性: 'aline',
    说明: '对齐方式',
    类型: ` 'center' | 'start' | 'end' | 'space-between' | 'space-around'`,
    默认值: 'center'
  }
];
const ColData: TableData = {
  header: ['属性', '说明', '类型', '默认值'],
  body: ColBody
};

export const ApiIntro: React.FC = () => {
  return (
    <div className="interface">
      <Title level={4}>Row</Title>
      <Table data={RowData} />
      <Title level={4}>Col</Title>
      <Table data={ColData} />
    </div>
  );
};
