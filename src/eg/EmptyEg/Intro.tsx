import React from 'react';
import { Paragraph, Title, Typography } from '../../lib';

export const Intro: React.FC = () => {
  return (
    <Typography>
      <Title level={3}>简介</Title>
      <Paragraph>
        <p>空状态时的展示占位图。</p>
      </Paragraph>
      <Title level={3}>组件概览</Title>
      <Paragraph>
        <ul>
          <li>Empty: 主要组件</li>
        </ul>
      </Paragraph>
      <Title level={3}>使用场景</Title>
      <Paragraph>
        <ul>
          <li>当目前没有数据时，用于显式的用户提示。</li>
          <li>初始化场景时的引导创建流程。</li>
        </ul>
      </Paragraph>
    </Typography>
  );
};
