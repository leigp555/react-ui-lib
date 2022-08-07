import React from 'react';
import { Paragraph, Title, Typography } from '../../lib';

export const Intro: React.FC = () => {
  return (
    <Typography>
      <Title level={3}>简介</Title>
      <Paragraph>
        <p>区隔内容的分割线。。</p>
      </Paragraph>
      <Title level={3}>组件概述</Title>
      <Paragraph>
        <ul>
          <li>Divider：主要组件</li>
        </ul>
      </Paragraph>
      <Title level={3}>使用场景</Title>
      <Paragraph>
        <ul>
          <li>对不同章节的文本段落进行分割。</li>
          <li>对行内文字/链接进行分割，例如表格的操作列。</li>
        </ul>
      </Paragraph>
    </Typography>
  );
};
