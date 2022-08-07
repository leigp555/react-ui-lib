import React from 'react';
import { Paragraph, Title, Typography } from '../../lib';

export const Intro: React.FC = () => {
  return (
    <Typography>
      <Title level={3}>简介</Title>
      <Paragraph>
        <p>高性能表单控件，自带数据域管理。包含数据录入、校验以及对应样式。</p>
      </Paragraph>
      <Title level={3}>组件概览</Title>
      <Paragraph>
        <ul>
          <li>Form: 主要组件</li>
          <li>FormItem:子组件。</li>
          <li>Input:子组件。</li>
          <li>InputIcon:子组件。</li>
        </ul>
      </Paragraph>
      <Title level={3}>使用场景</Title>
      <Paragraph>
        <ul>
          <li>用于创建一个实体或收集信息。</li>
          <li>需要对输入的数据类型进行校验时。</li>
        </ul>
      </Paragraph>
    </Typography>
  );
};
