import React from 'react';
import { Paragraph, Title, Typography } from '../../lib';

export const Intro: React.FC = () => {
  return (
    <Typography>
      <Title level={3}>简介</Title>
      <Paragraph>
        <p>
          主要用于即时操作，表示交互时发生的动作，响应用户点击行为触发相应的业务逻辑，比如添加、保存、删除和注册等。
        </p>
        <p>我们提供了五种按钮。</p>
        <ul>
          <li>主按钮：用于主行动点，一个操作区域只能有一个主按钮。</li>
          <li>默认按钮：用于没有主次之分的一组行动点。</li>
          <li>虚线按钮：常用于添加操作。</li>
          <li>文本按钮：用于最次级的行动点。</li>
          <li>链接按钮：一般用于链接，即导航至某位置。</li>
        </ul>
      </Paragraph>
      <Title level={3}>组件概述</Title>
      <Paragraph>
        <ul>
          <li>Button：主要组件</li>
        </ul>
      </Paragraph>
      <Title level={3}>使用场景</Title>
      <Paragraph>
        <p>用于启动即时操作，如提交表单。</p>
      </Paragraph>
    </Typography>
  );
};
