import React from 'react';
import { Table, Title } from '../../lib';
import { TableData } from '../../lib/Table/Table';

const dataBody = [
  { 属性: 'getFiles', 说明: '获取上传文件内容', 类型: 'Function', 默认值: 'null' },
  { 属性: 'getImgUrls', 说明: '获取上传图片base64', 类型: 'Function', 默认值: 'null' },
  { 属性: 'getUrlFail', 说明: '上传失败的回调函数', 类型: 'Function', 默认值: 'null' },
  { 属性: 'accept', 说明: '上传的内容类型', 类型: 'string', 默认值: '*' },
  { 属性: 'multiple', 说明: '是否可以多选', 类型: 'boolean', 默认值: 'false' },
  { 属性: 'tip', 说明: '上传界面显示的文本', 类型: 'string', 默认值: '点击或拖拽上传文件' }
];
const data: TableData = {
  header: ['属性', '说明', '类型', '默认值'],
  body: dataBody
};

const UploadToServerDataBody = [
  { 属性: 'config', 说明: '上传配置', 类型: 'Config', 默认值: 'null' }
];
const UploadToServerData: TableData = {
  header: ['属性', '说明', '类型', '默认值'],
  body: UploadToServerDataBody
};

export const ApiIntro: React.FC = () => {
  return (
    <div className="interface">
      <Title level={4}>Upload</Title>
      <Table data={data} />
      <Title level={4}>UploadToServer</Title>
      <Table data={UploadToServerData} />
    </div>
  );
};
