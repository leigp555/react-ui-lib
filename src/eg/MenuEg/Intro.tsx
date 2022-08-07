import React from 'react';
import { Paragraph, Title, Typography } from '../../lib';

export const Intro: React.FC = () => {
  return (
    <Typography>
      <Title level={3}>简介</Title>
      <Paragraph>
        <p>为页面和功能提供导航的菜单列表。</p>
      </Paragraph>
      <Title level={3}>组件概览</Title>
      <Paragraph>
        <ul>
          <li>使用导航菜单可以快速在网站的页面间跳转。</li>
          <li>导航同级之间在逻辑上需为并列且互斥的关系。</li>
        </ul>
      </Paragraph>
      <Title level={3}>使用场景</Title>
      <Paragraph>
        <ul>
          <li>使用导航菜单可以快速在网站的页面间跳转。</li>
          <li>导航同级之间在逻辑上需为并列且互斥的关系。</li>
        </ul>
      </Paragraph>
    </Typography>
  );
};
