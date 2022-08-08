import React from 'react';
import { Table, Title } from '../../lib';
import { TableData } from '../../lib/Table/Table';

const TextBody = [
  { 属性: 'bgc', 说明: '背景颜色', 类型: 'string', 默认值: '#1890ff' },
  { 属性: 'position', 说明: '位置', 类型: `'center' | 'start' | 'end'`, 默认值: 'false' },
  { 属性: 'callback', 说明: '切换时的回调', 类型: 'Function', 默认值: '' },
  { 属性: 'defaultKey', 说明: '默认位置', 类型: 'number', 默认值: '1' },
  { 属性: 'gap', 说明: 'title与content的距离', 类型: 'number', 默认值: '30' }
];
const TextData: TableData = {
  header: ['属性', '说明', '类型', '默认值'],
  body: TextBody
};

const TitleBody = [
  { 属性: 'tab', 说明: 'tab内容', 类型: 'ReactNode', 默认值: '标签' },
  { 属性: 'index', 说明: 'key唯一', 类型: 'string', 默认值: '' }
];
const TitleData: TableData = {
  header: ['属性', '说明', '类型', '默认值'],
  body: TitleBody
};

export const ApiIntro: React.FC = () => {
  return (
    <div className="interface">
      <Title level={4}>Tabs</Title>
      <Table data={TextData} />
      <Title level={4}>Tab</Title>
      <Table data={TitleData} />
    </div>
  );
};
