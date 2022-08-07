import React from 'react';
import { Paragraph, Title, Typography } from '../../lib';

export const Intro: React.FC = () => {
  return (
    <Typography>
      <Title level={3}>简介</Title>
      <Paragraph>
        <p>引导用户按照流程完成任务的导航条。</p>
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
          <li>steps：组件包裹</li>
          <li>step：展示每一步</li>
        </ul>
      </Paragraph>
      <Title level={3}>使用场景</Title>
      <Paragraph>
        <p>当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务。</p>
      </Paragraph>
    </Typography>
  );
};
