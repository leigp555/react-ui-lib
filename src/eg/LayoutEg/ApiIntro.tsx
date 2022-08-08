import React from 'react';
import { Table, Title } from '../../lib';
import { TableData } from '../../lib/Table/Table';

const LayoutBody = [
  { 属性: 'gap', 说明: '组件内竖直方向间距', 类型: 'number', 默认值: '0' },
  { 属性: 'bgc', 说明: '背景颜色', 类型: 'string', 默认值: 'inherit' }
];
const LayoutData: TableData = {
  header: ['属性', '说明', '类型', '默认值'],
  body: LayoutBody
};

const HeaderBody = [
  { 属性: 'height', 说明: '头部高度', 类型: 'number|string', 默认值: '100%' },
  { 属性: 'width', 说明: '头部宽度', 类型: 'number|string', 默认值: '100%' },
  { 属性: 'bgc', 说明: '背景颜色', 类型: 'string', 默认值: 'inherit' },
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
const HeaderData: TableData = {
  header: ['属性', '说明', '类型', '默认值'],
  body: HeaderBody
};

export const ApiIntro: React.FC = () => {
  return (
    <div className="interface">
      <Title level={4}>Layout</Title>
      <Table data={LayoutData} />
      <Title level={4}>LayoutWrap</Title>
      <Table data={LayoutData} />
      <Title level={4}>Header</Title>
      <Table data={HeaderData} />
      <Title level={4}>Content</Title>
      <Table data={HeaderData} />
      <Title level={4}>Footer</Title>
      <Table data={HeaderData} />
      <Title level={4}>Sider</Title>
      <Table data={HeaderData} />
    </div>
  );
};
