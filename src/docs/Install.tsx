import React from 'react';
import '../eg/content.scss';
import { Paragraph, Typography, Title } from '../lib';

const Install: React.FC = () => {
  const codeCss: React.CSSProperties = {
    width: '100%',
    height: '60px',
    display: 'flex',
    alignItems: 'center'
  };
  return (
    <div className="content-wrap">
      <h2 className="title">安装</h2>
      <Typography>
        <Title level={3}>npm安装</Title>
        <Paragraph>
          <code style={codeCss}>$ npm install uix-react</code>
        </Paragraph>
        <Title level={3}>yarn安装</Title>
        <Paragraph>
          <code style={codeCss}>$ yarn add uix-react</code>
        </Paragraph>
        <Title level={3}>pnpm安装</Title>
        <Paragraph>
          <code style={codeCss}>$ pnpm add uix-react</code>
        </Paragraph>
      </Typography>
    </div>
  );
};

export default Install;
