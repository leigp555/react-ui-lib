import React from 'react';
import { Table } from '../../lib';
import { TableData } from '../../lib/Table/Table';

const dataBody = [
  {
    属性: 'Tip',
    说明: '弹出框回调函数',
    类型:
      '(\n' +
      "  type: 'success' | 'info' | 'warning' | 'error' | 'loading',\n" +
      '  content: string,\n' +
      '  delay = 3000\n' +
      ') ',
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
