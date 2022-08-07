import React from 'react';
import { Paragraph, Title, Typography } from '../../lib';

export const Intro: React.FC = () => {
  return (
    <Typography>
      <Title level={3}>简介</Title>
      <Paragraph>
        <p>模态对话框。</p>
      </Paragraph>
      <Title level={3}>组件概览</Title>
      <Paragraph>
        <ul>
          <li>Modal: 主要组件</li>
        </ul>
      </Paragraph>
      <Title level={3}>使用场景</Title>
      <Paragraph>
        <ul>
          <li>
            需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal
            在当前页面正中打开一个浮层，承载相应的操作。
          </li>
        </ul>
      </Paragraph>
    </Typography>
  );
};
