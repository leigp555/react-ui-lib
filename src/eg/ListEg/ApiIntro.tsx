import React from 'react';
import { Table, Title } from '../../lib';
import { TableData } from '../../lib/Table/Table';

const ListBody = [
  { 属性: 'data', 说明: '数据源', 类型: 'any', 默认值: '' },
  { 属性: 'renderItem', 说明: '自定义渲染每一项', 类型: 'Function', 默认值: '' },
  { 属性: 'loadMoreCallback', 说明: '加载更多时的回调函数', 类型: 'Function', 默认值: '' },
  { 属性: 'paginateCallback', 说明: '分页模式的回调函数', 类型: 'Function', 默认值: '' },
  { 属性: 'isLoadFinish', 说明: '加载完毕', 类型: 'boolean', 默认值: '1' },
  { 属性: 'model', 说明: '模式', 类型: `'loadMore' | 'pagination' | 'normal'`, 默认值: 'normal' },
  { 属性: 'totalData', 说明: '数据总条数', 类型: 'number', 默认值: '' },
  { 属性: 'perPage', 说明: '分页模式每页多少条数据', 类型: 'number', 默认值: '10' }
];
const ListItemBody = [
  { 属性: 'avatar', 说明: '头像', 类型: 'ReactNode', 默认值: '' },
  { 属性: 'title', 说明: '标题', 类型: 'ReactNode', 默认值: '' },
  { 属性: 'description', 说明: '副标题', 类型: 'ReactNode', 默认值: '' },
  { 属性: 'actions', 说明: '操作', 类型: 'ReactNode', 默认值: '' }
];
const ListData: TableData = {
  header: ['属性', '说明', '类型', '默认值'],
  body: ListBody
};
const ListItemData: TableData = {
  header: ['属性', '说明', '类型', '默认值'],
  body: ListItemBody
};

export const ApiIntro: React.FC = () => {
  return (
    <div className="interface">
      <Title level={4}>List</Title>
      <Table data={ListData} />
      <Title level={4}>ListItem</Title>
      <Table data={ListItemData} />
    </div>
  );
};
