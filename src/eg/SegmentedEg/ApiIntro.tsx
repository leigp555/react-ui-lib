import React from 'react';
import { Table } from '../../lib';
import { TableData } from '../../lib/Table/Table';

const dataBody = [
  { 属性: 'options', 说明: '展示的内容', 类型: ' React.ReactNode[]', 默认值: '' },
  { 属性: 'value', 说明: '默认处于那个位置', 类型: 'React.ReactNode', 默认值: '' },
  {
    属性: 'changeValue',
    说明: '修改位置的函数',
    类型: 'Dispatch<SetStateAction<React.ReactNode>>',
    默认值: ''
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
