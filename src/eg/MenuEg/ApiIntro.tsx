import React from 'react';
import { Table, Title } from '../../lib';
import { TableData } from '../../lib/Table/Table';

const MenuItemBody = [{ 属性: 'order', 说明: '唯一key', 类型: 'number', 默认值: '1' }];
const MenuItemData: TableData = {
  header: ['属性', '说明', '类型', '默认值'],
  body: MenuItemBody
};

export const ApiIntro: React.FC = () => {
  return (
    <div className="interface">
      <Title level={4}>MenuItem</Title>
      <Table data={MenuItemData} />
    </div>
  );
};
