import React from 'react';
import { Paragraph, Title, Typography } from '../../lib';

export const Intro: React.FC = () => {
  return (
    <Typography>
      <Title level={3}>简介</Title>
      <Paragraph>
        <p>多选框。</p>
      </Paragraph>
      <Title level={3}>组件概览</Title>
      <Paragraph>
        <ul>
          <li>Checkbox: 主要组件</li>
        </ul>
      </Paragraph>
      <Title level={3}>使用场景</Title>
      <Paragraph>
        <ul>
          <li>在一组可选项中进行多项选择时；</li>
          <li>
            单独使用可以表示两种状态之间的切换，和 switch 类似。区别在于切换 switch
            会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。
          </li>
        </ul>
      </Paragraph>
    </Typography>
  );
};
