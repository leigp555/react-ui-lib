import React from 'react';
import { Table, Title } from '../../lib';
import { TableData } from '../../lib/Table/Table';

const BreadcrumbBody = [
  { 属性: 'separator', 说明: '分隔符', 类型: 'string', 默认值: '/' },
  { 属性: 'data', 说明: '分隔的数据', 类型: 'string[]', 默认值: '必传' },
  { 属性: 'renderItem', 说明: '回调函数,接受data的每一项', 类型: 'Function', 默认值: '必传' }
];
const BreadcrumbData: TableData = {
  header: ['属性', '说明', '类型', '默认值'],
  body: BreadcrumbBody
};

export const ApiIntro: React.FC = () => {
  return (
    <div className="interface">
      <Title level={4}>Breadcrumb</Title>
      <Table data={BreadcrumbData} />
    </div>
  );
};
