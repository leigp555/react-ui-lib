import React from 'react';
import { Paragraph, Title, Typography } from '../../lib';

export const Intro: React.FC = () => {
  return (
    <Typography>
      <Title level={3}>简介</Title>
      <Paragraph>
        <p>全局展示通知提醒信息。</p>
      </Paragraph>
      <Title level={3}>组件概览</Title>
      <Paragraph>
        <ul>
          <li>Notification: 主要组件</li>
          <li>openNotification: 子组件</li>
        </ul>
      </Paragraph>
      <Title level={3}>使用场景</Title>
      <p>在系统四个角显示通知提醒信息。经常用于以下情况：</p>
      <Paragraph>
        <ul>
          <li>较为复杂的通知内容。</li>
          <li>带有交互的通知，给出用户下一步的行动点。</li>
          <li>系统主动推送。</li>
        </ul>
      </Paragraph>
    </Typography>
  );
};
