import React from 'react';
import { Paragraph, Title, Typography } from '../../lib';

export const Intro: React.FC = () => {
  return (
    <Typography>
      <Title level={3}>简介</Title>
      <Paragraph>
        <p>在需要等待加载内容的位置提供一个占位图形组合。</p>
      </Paragraph>
      <Title level={3}>组件概览</Title>
      <Paragraph>
        <ul>
          <li>Skeleton: 主要组件</li>
          <li>SkeletonItem: 子组件</li>
        </ul>
      </Paragraph>
      <Title level={3}>使用场景</Title>
      <Paragraph>
        <ul>
          <li>网络较慢，需要长时间等待加载处理的情况下。</li>
          <li>图文信息内容较多的列表/卡片中。</li>
          <li>只在第一次加载数据的时候使用。</li>
          <li>
            可以被 Spin 完全代替，但是在可用的场景下可以比 Spin 提供更好的视觉效果和用户体验。
          </li>
        </ul>
      </Paragraph>
    </Typography>
  );
};
