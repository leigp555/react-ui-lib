import React from 'react';
import { Paragraph, Title, Typography } from '../../lib';

export const Intro: React.FC = () => {
  return (
    <Typography>
      <Title level={3}>简介</Title>
      <Paragraph>
        <p>垂直展示的时间流信息。</p>
      </Paragraph>
      <Title level={3}>组件概览</Title>
      <Paragraph>
        <ul>
          <li>Timeline: 主要组件</li>
          <li>TimeItem: 子组件。</li>
        </ul>
      </Paragraph>
      <Title level={3}>使用场景</Title>
      <Paragraph>
        <ul>
          <li>当有一系列信息需按时间排列时，可正序和倒序。</li>
          <li>需要有一条时间轴进行视觉上的串联时。</li>
        </ul>
      </Paragraph>
    </Typography>
  );
};
