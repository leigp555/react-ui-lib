import React from 'react';
import { Paragraph, Title, Typography } from '../../lib';

export const Intro: React.FC = () => {
  return (
    <Typography>
      <Title level={3}>简介</Title>
      <Paragraph>
        <p>展示操作的当前进度。</p>
      </Paragraph>
      <Title level={3}>组件概览</Title>
      <Paragraph>
        <ul>
          <li>Progress: 主要组件</li>
        </ul>
      </Paragraph>
      <Title level={3}>使用场景</Title>
      <Paragraph>
        <p>在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。</p>
        <ul>
          <li>当一个操作会打断当前界面，或者需要在后台运行，且耗时可能超过 2 秒时；</li>
          <li>当需要显示一个操作完成的百分比时。</li>
        </ul>
      </Paragraph>
    </Typography>
  );
};
