import React from 'react';
import { Paragraph, Title, Typography } from '../../lib';

export const Intro: React.FC = () => {
  return (
    <Typography>
      <Title level={3}>简介</Title>
      <Paragraph>
        <p>协助进行页面级整体布局。</p>
      </Paragraph>
      <Title level={3}>组件概述</Title>
      <Paragraph>
        <ul>
          <li>
            Layout：布局容器，其下可嵌套 Header Sider Content Footer 或 Layout
            本身，可以放在任何父容器中。
          </li>
          <li>Header：顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。</li>
          <li>Sider：侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在 Layout 中。</li>
          <li>Content：内容部分，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。</li>
          <li>Footer：底部布局，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。</li>
        </ul>
      </Paragraph>
      <Title level={3}>使用场景</Title>
      <Paragraph>
        <p>快速布局页面</p>
      </Paragraph>
    </Typography>
  );
};
