import React from 'react';
import { Paragraph, Title, Typography } from '../../lib';

export const Intro: React.FC = () => {
  return (
    <Typography>
      <Title level={3}>简介</Title>
      <Paragraph>
        <p>对文章内容进行排版，统一文章样式</p>
      </Paragraph>
      <Title level={3}>组件概述</Title>
      <Paragraph>
        <ul>
          <li>Typography：组件包裹</li>
          <li>Paragraph：段落</li>
          <li>Text：用于加粗，标记</li>
          <li>Title：标题可设置h1-h6</li>
        </ul>
      </Paragraph>
      <Title level={3}>使用场景</Title>
      <Paragraph>
        <ul>
          <li>当需要展示标题、段落、列表内容时使用，如文章/博客/日志的文本样式。</li>
          <li>当需要一列基于文本的基础操作时，如拷贝/省略/可编辑。</li>
        </ul>
      </Paragraph>
    </Typography>
  );
};
