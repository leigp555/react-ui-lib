import React from 'react';
import { Paragraph, Title, Typography } from '../../lib';

export const Intro: React.FC = () => {
  return (
    <Typography>
      <Title level={3}>简介</Title>
      <Paragraph>
        <p>采用分页的形式分隔长列表，每次只加载一个页面。</p>
      </Paragraph>
      <Title level={3}>组件概述</Title>
      <Paragraph>
        <ul>
          <li>Pagination：主要组件</li>
        </ul>
      </Paragraph>
      <Title level={3}>使用场景</Title>
      <Paragraph>
        <ul>
          <li>当加载/渲染所有数据将花费很多时间时；</li>
          <li>可切换页码浏览数据。</li>
        </ul>
      </Paragraph>
    </Typography>
  );
};
