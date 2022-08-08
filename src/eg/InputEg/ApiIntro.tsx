import React from 'react';
import { Table, Title } from '../../lib';
import { TableData } from '../../lib/Table/Table';

const InputBody = [
  { 属性: 'type', 说明: '表单类型', 类型: 'text|password', 默认值: 'text' },
  { 属性: 'tips', 说明: '提示的类容', 类型: 'Array', 默认值: '[]' },
  { 属性: 'callback', 说明: '输入框内容改变时的回调', 类型: 'Function', 默认值: 'null' },
  { 属性: 'rules', 说明: '输入框内容验证', 类型: 'Array', 默认值: '[]' },
  { 属性: 'allowClear', 说明: '清空图标', 类型: 'boolean', 默认值: 'false' }
];
const InputData: TableData = {
  header: ['属性', '说明', '类型', '默认值'],
  body: InputBody
};

export const ApiIntro: React.FC = () => {
  return (
    <div className="interface">
      <Title level={4}>Input</Title>
      <Table data={InputData} />
    </div>
  );
};
