import React from 'react';
import { Intro } from './Intro';
import { Demo } from './Demo';
import { CodeShow } from '../CodeShow';
import { ApiIntro } from './ApiIntro';
import '../content.scss';
import { Title } from '../../lib';
import { code } from './code';

const Example: React.FC = () => {
  return (
    <div className="content-wrap">
      <h2 className="title">Carousel 走马灯</h2>
      <Intro />
      <Title level={3}>案例</Title>
      <Demo />
      <Title level={3}>代码示例</Title>
      <CodeShow code={code} />
      <Title level={3}>接口</Title>
      <ApiIntro />
    </div>
  );
};

export default Example;
