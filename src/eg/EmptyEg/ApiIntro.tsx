import React from 'react';
import { Table } from '../../lib';
import { TableData } from '../../lib/Table/Table';

const dataBody = [
  { 属性: 'icon', 说明: '自定义展示的图标', 类型: 'React.ReactNode', 默认值: '' },
  { 属性: 'description', 说明: '空描述', 类型: 'React.ReactNode', 默认值: '' }
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
