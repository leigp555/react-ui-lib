import React from 'react';
import { Table, Title } from '../../lib';
import { TableData } from '../../lib/Table/Table';

const DropdownBody = [{ 属性: 'tips', 说明: '下拉内容', 类型: 'Tip', 默认值: '' }];
const DropdownData: TableData = {
  header: ['属性', '说明', '类型', '默认值'],
  body: DropdownBody
};

export const ApiIntro: React.FC = () => {
  return (
    <div className="interface">
      <Title level={4}>Dropdown</Title>
      <Table data={DropdownData} />
    </div>
  );
};
