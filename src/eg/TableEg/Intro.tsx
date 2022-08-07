import React from 'react';
import { Paragraph, Title, Typography } from '../../lib';

export const Intro: React.FC = () => {
  return (
    <Typography>
      <Title level={3}>简介</Title>
      <Paragraph>
        <p>展示行列数据。</p>
      </Paragraph>
      <Title level={3}>组件概览</Title>
      <Paragraph>
        <ul>
          <li>AsyncTable: 主要组件</li>
          <li>Table: 主要组件</li>
        </ul>
      </Paragraph>
      <Title level={3}>使用场景</Title>
      <Paragraph>
        <ul>
          <li>当有大量结构化的数据需要展现时；</li>
          <li>当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时。</li>
        </ul>
      </Paragraph>
    </Typography>
  );
};
