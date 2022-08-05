import React from 'react';
import { Intro } from './Intro';
import { Demo } from './Demo';
import '../content.scss';
import { Title } from '../../lib';

const Example: React.FC = () => {
  return (
    <div className="content-wrap">
      <h2 className="title">Palette 调色板</h2>
      <Intro />
      <Title level={3}>案例</Title>
      <Demo />
    </div>
  );
};

export default Example;
