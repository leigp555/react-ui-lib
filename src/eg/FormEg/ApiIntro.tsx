import React from 'react';
import { Table, Title } from '../../lib';
import { TableData } from '../../lib/Table/Table';

const FormBody = [
  { 属性: 'gap', 说明: '表单间隙', 类型: 'number|string', 默认值: '1.2em' },
  { 属性: 'onFinish', 说明: '提交时执行的回调函数', 类型: 'Function', 默认值: 'null' }
];
const FormData: TableData = {
  header: ['属性', '说明', '类型', '默认值'],
  body: FormBody
};

const FormItemBody = [{ 属性: 'rules', 说明: '校验规则数组', 类型: 'Array', 默认值: '[]' }];
const FormItemData: TableData = {
  header: ['属性', '说明', '类型', '默认值'],
  body: FormItemBody
};

export const ApiIntro: React.FC = () => {
  return (
    <div className="interface">
      <Title level={4}>Form</Title>
      <Table data={FormData} />
      <Title level={4}>FormItem</Title>
      <Table data={FormItemData} />
    </div>
  );
};
