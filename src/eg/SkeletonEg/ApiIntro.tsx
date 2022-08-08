import React from 'react';
import { Table, Title } from '../../lib';
import { TableData } from '../../lib/Table/Table';

const TextBody = [
  { 属性: 'gap', 说明: '骨架间距', 类型: 'number', 默认值: '10' },
  { 属性: 'loading', 说明: '是否显示骨架图', 类型: 'boolean', 默认值: 'true' }
];
const TextData: TableData = {
  header: ['属性', '说明', '类型', '默认值'],
  body: TextBody
};

const TitleBody = [
  { 属性: 'span', 说明: '宽度百分比', 类型: 'number', 默认值: '100' },
  { 属性: 'offset', 说明: '向右偏移量', 类型: 'number', 默认值: '0' },
  { 属性: 'height', 说明: '骨架高度', 类型: 'number', 默认值: '20' }
];
const TitleData: TableData = {
  header: ['属性', '说明', '类型', '默认值'],
  body: TitleBody
};

export const ApiIntro: React.FC = () => {
  return (
    <div className="interface">
      <Title level={4}>Skeleton</Title>
      <Table data={TextData} />
      <Title level={4}>SkeletonItem</Title>
      <Table data={TitleData} />
    </div>
  );
};
