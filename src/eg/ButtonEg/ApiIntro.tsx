import React from 'react';
import { Table } from '../../lib';
import { TableData } from '../../lib/Table/Table';

const dataBody = [
  { 属性: 'radius', 说明: '边角是否为圆弧', 类型: 'boolean', 默认值: 'false' },
  { 属性: 'disabled', 说明: '是否禁止点击', 类型: 'boolean', 默认值: 'false' },
  { 属性: 'loading', 说明: '是否为加载中状态', 类型: 'boolean', 默认值: 'false' },
  {
    属性: 'type',
    说明: '按钮类型',
    类型: ` 'primary' | 'text' | 'link' | 'dashed' | 'default'`,
    默认值: 'primary'
  }
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
