import React from 'react';
import { Table, Title } from '../../lib';
import { TableData } from '../../lib/Table/Table';

const dataBody = [
  {
    属性: 'openNotification',
    说明: '接受Notification组件和持续时间',
    类型: 'Function',
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
      <Title level={4}>openNotification</Title>
      <Table data={data} />
    </div>
  );
};
