import React from 'react';
import { Paragraph, Title, Typography } from '../../lib';

export const Intro: React.FC = () => {
  return (
    <Typography>
      <Title level={3}>简介</Title>
      <Paragraph>
        <p>进行标记和分类的小标签。</p>
      </Paragraph>
      <Title level={3}>组件概览</Title>
      <Paragraph>
        <ul>
          <li>Tag: 主要组件</li>
          <li>TagGroup: 主要组件</li>
        </ul>
      </Paragraph>
      <Title level={3}>使用场景</Title>
      <Paragraph>
        <ul>
          <li>用于标记事物的属性和维度。</li>
          <li>进行分类。</li>
        </ul>
      </Paragraph>
    </Typography>
  );
};
