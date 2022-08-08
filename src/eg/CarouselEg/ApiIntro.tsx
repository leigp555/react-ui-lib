import React from 'react';
import { Table, Title } from '../../lib';
import { TableData } from '../../lib/Table/Table';

const TextBody = [
  { 属性: 'dot', 说明: '下方的点点', 类型: 'boolean', 默认值: 'false' },
  { 属性: 'autoPlay', 说明: '自动播放', 类型: 'boolean', 默认值: 'false' },
  { 属性: 'callback', 说明: '切换时执行的回调', 类型: 'boolean', 默认值: 'false' }
];
const TextData: TableData = {
  header: ['属性', '说明', '类型', '默认值'],
  body: TextBody
};

const TitleBody = [{ 属性: 'order', 说明: '唯一的key', 类型: 'number', 默认值: '' }];
const TitleData: TableData = {
  header: ['属性', '说明', '类型', '默认值'],
  body: TitleBody
};

export const ApiIntro: React.FC = () => {
  return (
    <div className="interface">
      <Title level={4}>Carousel</Title>
      <Table data={TextData} />
      <Title level={4}>CarouselItem</Title>
      <Table data={TitleData} />
    </div>
  );
};
