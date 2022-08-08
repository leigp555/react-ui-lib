import React from 'react';
import { Table } from '../../lib';
import { TableData } from '../../lib/Table/Table';

const dataBody = [
  {
    属性: 'format',
    说明: '回调函数，接受当前百分比',
    类型: 'Function',
    // eslint-disable-next-line no-template-curly-in-string
    默认值: '(num: number) => `${num}%`'
  },
  { 属性: 'defaultPercent', 说明: '当前百分比', 类型: 'number', 默认值: '必传' },
  {
    属性: 'setPercent',
    说明: '设置百分比的回调函数',
    类型: 'Dispatch<SetStateAction<number>>',
    默认值: '必传'
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
