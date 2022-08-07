import React from 'react';
import { Paragraph, Title, Typography } from '../../lib';

export const Intro: React.FC = () => {
  return (
    <Typography>
      <Title level={3}>简介</Title>
      <Paragraph>
        <p>选项卡切换组件。</p>
      </Paragraph>
      <Title level={3}>组件概览</Title>
      <Paragraph>
        <ul>
          <li>Tabs: 主要组件</li>
          <li>Tab: 子组件。</li>
        </ul>
      </Paragraph>
      <Title level={3}>使用场景</Title>
      <Paragraph>
        <ul>
          <li>提供平级的区域将大块内容进行收纳和展现，保持界面整洁。</li>
        </ul>
      </Paragraph>
    </Typography>
  );
};
