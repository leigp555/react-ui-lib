import React from 'react';
import { Paragraph, Title, Typography } from '../../lib';

export const Intro: React.FC = () => {
  return (
    <Typography>
      <Title level={3}>简介</Title>
      <Paragraph>
        <p>本组件收集了网站的常用颜色</p>
      </Paragraph>
      <Title level={3}>使用场景</Title>
      <Paragraph>
        <p>网站颜色选取</p>
      </Paragraph>
    </Typography>
  );
};
