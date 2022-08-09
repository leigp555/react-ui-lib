import React from 'react';
import '../eg/content.scss';
import { Paragraph, Typography, Title } from '../lib';

const Usage: React.FC = () => {
  return (
    <div className="content-wrap">
      <h2 className="title">Usage</h2>
      <Typography>
        <Title level={3}>必要依赖</Title>
        <Paragraph>
          <p>使用此库前请确保安装了下面的依赖</p>
          <ul>
            <li>styled-components</li>
            <li>react-transition-group</li>
            <li>dayjs</li>
            <li>classnames</li>
            <li>sass</li>
          </ul>
        </Paragraph>
      </Typography>
    </div>
  );
};

export default Usage;
