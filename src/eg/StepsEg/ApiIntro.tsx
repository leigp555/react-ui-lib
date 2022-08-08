import React from 'react';
import { Table, Title } from '../../lib';
import { TableData } from '../../lib/Table/Table';

const StepsBody = [{ 属性: 'current', 说明: '处于那一步', 类型: 'number', 默认值: '0' }];
const StepsData: TableData = {
  header: ['属性', '说明', '类型', '默认值'],
  body: StepsBody
};

const TitleBody = [{ 属性: 'value', 说明: '步骤条信息', 类型: 'React.ReactNode', 默认值: 'null' }];
const StepData: TableData = {
  header: ['属性', '说明', '类型', '默认值'],
  body: TitleBody
};

export const ApiIntro: React.FC = () => {
  return (
    <div className="interface">
      <Title level={4}>Steps</Title>
      <Table data={StepsData} />
      <Title level={4}>Step</Title>
      <Table data={StepData} />
    </div>
  );
};
