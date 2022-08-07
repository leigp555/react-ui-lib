import React from 'react';
import { Paragraph, Title, Typography } from '../../lib';

export const Intro: React.FC = () => {
  return (
    <Typography>
      <Title level={3}>简介</Title>
      <Paragraph>
        <p>设置组件之间的间距。</p>
      </Paragraph>
      <Title level={3}>组件概述</Title>
      <Paragraph>
        <ul>
          <li>Space：主要组件</li>
        </ul>
      </Paragraph>
      <Title level={3}>使用场景</Title>
      <Paragraph>
        <p>避免组件紧贴在一起，拉开统一的空间。</p>
        <ul>
          <li>适合行内元素的水平间距。</li>
          <li>可以设置各种水平对齐方式。</li>
        </ul>
      </Paragraph>
    </Typography>
  );
};
