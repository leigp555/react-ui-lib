import React from 'react';
import { Paragraph, Title, Typography } from '../../lib';

export const Intro: React.FC = () => {
  return (
    <Typography>
      <Title level={3}>简介</Title>
      <Paragraph>
        <p>分段控制器</p>
      </Paragraph>
      <Title level={3}>组件概览</Title>
      <Paragraph>
        <ul>
          <li>Segmented: 主要组件</li>
        </ul>
      </Paragraph>
      <Title level={3}>使用场景</Title>
      <Paragraph>
        <ul>
          <li>用于展示多个选项并允许用户选择其中单个选项；</li>
          <li>当切换选中选项时，关联区域的内容会发生变化。</li>
        </ul>
      </Paragraph>
    </Typography>
  );
};
