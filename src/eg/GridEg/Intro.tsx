import React from 'react';
import { Paragraph, Title, Typography } from '../../lib';

export const Intro: React.FC = () => {
  return (
    <Typography>
      <Title level={3}>简介</Title>
      <Paragraph>
        <p>100 栅格系统。</p>
      </Paragraph>
      <Title level={3}>组件概述</Title>
      <Paragraph>
        <ul>
          <li>Col：横向布局</li>
          <li>Row：纵向布局</li>
        </ul>
      </Paragraph>
      <Title level={3}>使用场景</Title>
      <Paragraph>
        <p>我们将整个设计建议区域按照 100 等分的原则进行划分。便于快速对区域进行横向布局</p>
      </Paragraph>
    </Typography>
  );
};
