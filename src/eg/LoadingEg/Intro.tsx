import React from 'react';
import { Paragraph, Title, Typography } from '../../lib';

export const Intro: React.FC = () => {
  return (
    <Typography>
      <Title level={3}>简介</Title>
      <Paragraph>
        <p>用于页面和区块的加载中状态。</p>
      </Paragraph>
      <Title level={3}>组件概览</Title>
      <Paragraph>
        <ul>
          <li>Loading: 主要组件</li>
        </ul>
      </Paragraph>
      <Title level={3}>使用场景</Title>
      <Paragraph>
        <ul>
          <li>页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。</li>
        </ul>
      </Paragraph>
    </Typography>
  );
};
