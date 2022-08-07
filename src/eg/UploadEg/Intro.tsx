import React from 'react';
import { Paragraph, Title, Typography } from '../../lib';

export const Intro: React.FC = () => {
  return (
    <Typography>
      <Title level={3}>简介</Title>
      <Paragraph>
        <p>文件选择上传和拖拽上传控件。</p>
      </Paragraph>
      <Title level={3}>组件概览</Title>
      <Paragraph>
        <ul>
          <li>Upload: 主要组件</li>
          <li>UploadToServer: 主要组件。</li>
        </ul>
      </Paragraph>
      <Title level={3}>使用场景</Title>
      <Paragraph>
        <ul>
          <li>当需要上传一个或一些文件时。</li>
          <li>当需要展现上传的进度时。</li>
          <li>当需要使用拖拽交互时。</li>
        </ul>
      </Paragraph>
    </Typography>
  );
};
