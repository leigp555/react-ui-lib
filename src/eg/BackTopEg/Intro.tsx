import React from 'react';
import { Paragraph, Title, Typography } from '../../lib';

export const Intro: React.FC = () => {
  return (
    <Typography>
      <Title level={3}>简介</Title>
      <Paragraph>
        <p>返回页面顶部的操作按钮。</p>
      </Paragraph>
      <Title level={3}>组件概览</Title>
      <Paragraph>
        <ul>
          <li>BackTop: 主要组件</li>
        </ul>
      </Paragraph>
      <Title level={3}>使用场景</Title>
      <Paragraph>
        <ul>
          <li>当页面内容区域比较长时；</li>
          <li>当用户需要频繁返回顶部查看相关内容时。</li>
        </ul>
      </Paragraph>
    </Typography>
  );
};
