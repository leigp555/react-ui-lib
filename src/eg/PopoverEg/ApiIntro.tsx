import React from 'react';
import { Table } from '../../lib';
import { TableData } from '../../lib/Table/Table';

const dataBody = [
  {
    属性: 'position',
    说明: '提示框出现的位置',
    类型: `'topLeft'
  | 'topCenter'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomCenter'
  | 'bottomRight'
  | 'leftTop'
  | 'leftCenter'
  | 'leftBottom'
  | 'rightTop'
  | 'rightCenter'
  | 'rightBottom'`,
    默认值: 'topCenter'
  },
  { 属性: 'content', 说明: '提示内容', 类型: 'ReactNode', 默认值: '' },
  { 属性: 'title', 说明: '提示的标题', 类型: 'string', 默认值: '' },
  { 属性: 'trigger', 说明: '触发条件', 类型: `'hover' | 'click'`, 默认值: 'click' }
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
