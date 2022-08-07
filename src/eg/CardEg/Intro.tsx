import React from 'react';
import { Paragraph, Title, Typography } from '../../lib';

export const Intro: React.FC = () => {
  return (
    <Typography>
      <Title level={3}>简介</Title>
      <Paragraph>
        <p>通用卡片容器。</p>
      </Paragraph>
      <Title level={3}>组件概览</Title>
      <Paragraph>
        <ul>
          <li>Card: 主要组件</li>
        </ul>
      </Paragraph>
      <Title level={3}>使用场景</Title>
      <Paragraph>
        <ul>
          <li>最基础的卡片容器，可承载文字、列表、图片、段落，常用于后台概览页面。</li>
        </ul>
      </Paragraph>
    </Typography>
  );
};
