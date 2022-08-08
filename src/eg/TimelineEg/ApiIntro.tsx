import React from 'react';
import { Table, Title } from '../../lib';
import { TableData } from '../../lib/Table/Table';

const TextBody = [
  { 属性: 'mode', 说明: '位置', 类型: `'left' | 'right' | 'alternate';`, 默认值: 'left' }
];
const TextData: TableData = {
  header: ['属性', '说明', '类型', '默认值'],
  body: TextBody
};

const TitleBody = [
  { 属性: 'color', 说明: '圆点颜色', 类型: 'string', 默认值: '#1890ff' },
  { 属性: 'dotIcon', 说明: '圆点内容自定义', 类型: ' React.ReactNode', 默认值: '' }
];
const TitleData: TableData = {
  header: ['属性', '说明', '类型', '默认值'],
  body: TitleBody
};

export const ApiIntro: React.FC = () => {
  return (
    <div className="interface">
      <Title level={4}>Timeline</Title>
      <Table data={TextData} />
      <Title level={4}>TimelineItem</Title>
      <Table data={TitleData} />
    </div>
  );
};
