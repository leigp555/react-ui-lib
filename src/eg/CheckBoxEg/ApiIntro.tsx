import React from 'react';
import { Table } from '../../lib';
import { TableData } from '../../lib/Table/Table';

const dataBody = [
  { 属性: 'options', 说明: '选项数组', 类型: 'Array', 默认值: '[]' },
  { 属性: 'checked', 说明: '已选中的选项', 类型: 'Array', 默认值: '[]' },
  { 属性: 'setChecked', 说明: '修改选项', 类型: 'Dispatch<SetStateAction<string[]>>', 默认值: '' }
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
