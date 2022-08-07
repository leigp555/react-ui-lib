import React from 'react';
import { Paragraph, Title, Typography } from '../../lib';

export const Intro: React.FC = () => {
  return (
    <Typography>
      <Title level={3}>简介</Title>
      <Paragraph>
        <p>点击元素，弹出气泡式的确认框。</p>
      </Paragraph>
      <Title level={3}>组件概览</Title>
      <Paragraph>
        <ul>
          <li>PopConfirm: 主要组件</li>
        </ul>
      </Paragraph>
      <Title level={3}>使用场景</Title>
      <Paragraph>
        <ul>
          <li>目标元素的操作需要用户进一步的确认时，在目标元素附近弹出浮层提示，询问用户。</li>
        </ul>
      </Paragraph>
    </Typography>
  );
};
