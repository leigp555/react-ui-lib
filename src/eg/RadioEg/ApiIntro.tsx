import React from 'react';
import { Table, Title } from '../../lib';
import { TableData } from '../../lib/Table/Table';

const RadioBody = [
  { 属性: 'callback', 说明: '选择变化时的回调', 类型: 'Function', 默认值: 'null' },
  { 属性: 'value', 说明: '默认选择第几个', 类型: 'number', 默认值: '1' },
  { 属性: 'direction', 说明: '排列方式', 类型: 'column|row', 默认值: 'row' }
];
const RadioData: TableData = {
  header: ['属性', '说明', '类型', '默认值'],
  body: RadioBody
};

const RadioItemBody = [{ 属性: 'value', 说明: '序号，必须唯一', 类型: 'number', 默认值: '必填' }];
const RadioItemData: TableData = {
  header: ['属性', '说明', '类型', '默认值'],
  body: RadioItemBody
};

export const ApiIntro: React.FC = () => {
  return (
    <div className="interface">
      <Title level={4}>Radio</Title>
      <Table data={RadioData} />
      <Title level={4}>RadioItem</Title>
      <Table data={RadioItemData} />
    </div>
  );
};
