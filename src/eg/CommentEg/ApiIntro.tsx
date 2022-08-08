import React from 'react';
import { Table } from '../../lib';
import { TableData } from '../../lib/Table/Table';

const dataBody = [
  { 属性: 'data', 说明: '评论数据', 类型: 'CommentData[]', 默认值: '' },
  {
    属性: 'actions',
    说明: '对评论的操作',
    类型: '(item: CommentData) => React.ReactNode',
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
