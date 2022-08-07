import React from 'react';
import { Paragraph, Title, Typography } from '../../lib';

export const Intro: React.FC = () => {
  return (
    <Typography>
      <Title level={3}>简介</Title>
      <Paragraph>
        <p>警告提示，展现需要关注的信息。</p>
      </Paragraph>
      <Title level={3}>组件概览</Title>
      <Paragraph>
        <ul>
          <li>Alert: 主要组件</li>
        </ul>
      </Paragraph>
      <Title level={3}>使用场景</Title>
      <Paragraph>
        <ul>
          <li>当某个页面需要向用户显示警告的信息时。</li>
          <li>非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。</li>
        </ul>
      </Paragraph>
    </Typography>
  );
};
