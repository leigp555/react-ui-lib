import React from 'react';
import { Table, Title } from '../../lib';
import { TableData } from '../../lib/Table/Table';

const TextBody = [{ 属性: 'defaultKey', 说明: '默认展开哪一项', 类型: 'string', 默认值: '' }];
const TextData: TableData = {
  header: ['属性', '说明', '类型', '默认值'],
  body: TextBody
};

const TitleBody = [
  { 属性: 'header', 说明: '标题', 类型: 'number(1-6)', 默认值: '' },
  { 属性: 'order', 说明: '唯一的key', 类型: 'string', 默认值: '' }
];
const TitleData: TableData = {
  header: ['属性', '说明', '类型', '默认值'],
  body: TitleBody
};

export const ApiIntro: React.FC = () => {
  return (
    <div className="interface">
      <Title level={4}>Collapse</Title>
      <Table data={TextData} />
      <Title level={4}>Panel</Title>
      <Table data={TitleData} />
    </div>
  );
};
