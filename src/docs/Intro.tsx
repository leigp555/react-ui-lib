import React from 'react';
import '../eg/content.scss';
import { Paragraph, Typography, Title, Text } from '../lib';

const Intro: React.FC = () => {
  return (
    <div className="content-wrap">
      <Typography>
        <Title level={2}>Uix of React</Title>
        <Paragraph>
          <p>Uix 是一套链接开发者、设计师、交互和产品经理的桌面端组件库</p>
        </Paragraph>
        <Title level={3}>特性</Title>
        <Paragraph>
          <ul>
            <li>
              <Text strong> 视觉统一。</Text>
              个人维护并持续更新，保证了视觉层面的高颜值和统一性。
            </li>
            <li>
              <Text strong> 易于上手。</Text>
              开箱即用，详尽文档/示例，在线 Demo 不必安装本地即可在线编辑和学习。
            </li>
            <li>
              <Text strong> 组件丰富。</Text>
              覆盖了大部分开发场景，满足绝大部分网站需求，易于配置，提升开发效率。
            </li>
            <li>
              <Text strong> 按需加载。</Text>
              默认支持基于 ES modules 的 tree shaking，按需加载提升页面性能。
            </li>
            <li>
              <Text strong> TypeScript。</Text>
              全套使用 TypeScript，胜任大型项目开发。
            </li>
          </ul>
        </Paragraph>
        <Title level={3}>支持环境</Title>
        <Paragraph>
          <ul>
            <li>现代浏览器和 IE10+（需要 polyfills ）。</li>
            <li>react ^16</li>
            <li>react-dom ^16</li>
            <li>typescript ^4</li>
          </ul>
        </Paragraph>
      </Typography>
    </div>
  );
};

export default Intro;
