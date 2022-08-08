import React from 'react';
import { Table, Title } from '../../lib';
import { TableData } from '../../lib/Table/Table';

const TextBody = [
  { 属性: 'strong', 说明: '加粗', 类型: 'boolean', 默认值: 'false' },
  { 属性: 'code', 说明: '文本为代码类型', 类型: 'boolean', 默认值: 'false' },
  { 属性: 'keyboard', 说明: '是否表示键盘按键', 类型: 'boolean', 默认值: 'false' },
  { 属性: 'mark', 说明: '特殊颜色标记', 类型: 'boolean', 默认值: 'false' }
];
const TextData: TableData = {
  header: ['属性', '说明', '类型', '默认值'],
  body: TextBody
};

const TitleBody = [{ 属性: 'level', 说明: 'h1-h6标签', 类型: 'number(1-6)', 默认值: '1' }];
const TitleData: TableData = {
  header: ['属性', '说明', '类型', '默认值'],
  body: TitleBody
};

export const ApiIntro: React.FC = () => {
  return (
    <div className="interface">
      <Title level={4}>Text</Title>
      <Table data={TextData} />
      <Title level={4}>Title</Title>
      <Table data={TitleData} />
    </div>
  );
};
