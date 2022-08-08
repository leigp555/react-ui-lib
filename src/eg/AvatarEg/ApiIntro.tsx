import React from 'react';
import { Table } from '../../lib';
import { TableData } from '../../lib/Table/Table';

const dataBody = [
  { 属性: 'size', 说明: '头像尺寸', 类型: 'number', 默认值: '40' },
  { 属性: 'icon', 说明: '自定义icon', 类型: 'ReactNode', 默认值: '' },
  { 属性: 'src', 说明: '头像链接', 类型: 'string', 默认值: '' },
  { 属性: 'bgc', 说明: '头像背景', 类型: 'string', 默认值: '#cccccc' }
];
const data: TableData = {
  header: ['属性', '说明', '类型', '默认值'],
  body: dataBody
};

export const ApiIntro: React.FC = () => {
  return (
    <div className="interface">
      <Table data={data} />
    </div>
  );
};
