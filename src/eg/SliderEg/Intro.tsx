import React from 'react';
import { Paragraph, Title, Typography } from '../../lib';

export const Intro: React.FC = () => {
  return (
    <Typography>
      <Title level={3}>简介</Title>
      <Paragraph>
        <p>滑动型输入器，展示当前值和可选范围。</p>
      </Paragraph>
      <Title level={3}>组件概览</Title>
      <Paragraph>
        <ul>
          <li>Slider: 主要组件</li>
        </ul>
      </Paragraph>
      <Title level={3}>使用场景</Title>
      <Paragraph>
        <ul>
          <li>当用户需要在数值区间/自定义区间内进行选择时，可为连续或离散值。</li>
        </ul>
      </Paragraph>
    </Typography>
  );
};
