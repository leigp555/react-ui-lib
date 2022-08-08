import React from 'react';
import { Table, Title } from '../../lib';
import { TableData } from '../../lib/Table/Table';

const TextBody = [{ 属性: 'color', 说明: '文字颜色', 类型: 'string', 默认值: '#f7bd19' }];
const TextData: TableData = {
  header: ['属性', '说明', '类型', '默认值'],
  body: TextBody
};

const TitleBody = [
  { 属性: 'tags', 说明: '标签列表', 类型: 'Tags', 默认值: '' },
  { 属性: 'closeable', 说明: '删除按钮', 类型: 'boolean', 默认值: 'false' },
  { 属性: 'callback', 说明: '修改列表', 类型: '(tag: Tags) => void', 默认值: '' },
  { 属性: 'setTag', 说明: '修改列表', 类型: 'Dispatch<SetStateAction<Tags>>', 默认值: '' }
];
const TitleData: TableData = {
  header: ['属性', '说明', '类型', '默认值'],
  body: TitleBody
};

export const ApiIntro: React.FC = () => {
  return (
    <div className="interface">
      <Title level={4}>Tag</Title>
      <Table data={TextData} />
      <Title level={4}>TagGroup</Title>
      <Table data={TitleData} />
    </div>
  );
};
