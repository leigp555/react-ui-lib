import React from 'react';
import { Paragraph, Title, Typography } from '../../lib';

export const Intro: React.FC = () => {
  return (
    <Typography>
      <Title level={3}>简介</Title>
      <Paragraph>
        <p>一组可收起展开的列表或动作，用于过滤、排序，或将动作折叠到菜单中。</p>
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
        <p>
          当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。
        </p>
        <ul>
          <li>用于收罗一组命令操作。</li>
          <li>Select 用于选择，而 Dropdown 是命令集合。</li>
        </ul>
      </Paragraph>
    </Typography>
  );
};
