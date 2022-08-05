import React from 'react';
import { marked } from 'marked';
import hljs from 'highlight.js';
import { Row, Col, Typography, Paragraph, Title, Table } from '../../lib';
import { TableData } from '../../lib/Table/Table';
import '../content.scss';
import { grid } from './grid';

// 配置marked
marked.setOptions({
  highlight(code, lang) {
    const language = hljs.getLanguage(lang) ? lang : 'plaintext';
    return hljs.highlight(code, { language }).value;
  },
  langPrefix: 'hljs language-',
  gfm: true
});
const dataBody = [
  { 姓名: '张三', 年龄: 1, 班级: 335, 身高: 175 },
  { 姓名: '张三', 年龄: 2, 班级: 335, 身高: 175 }
];
const GridEg: React.FC = () => {
  const data: TableData = {
    header: ['属性', '说明', '类型', '默认值'],
    body: dataBody
  };
  const render = () => {
    return marked(grid, { breaks: true });
  };
  return (
    <div className="content-wrap">
      <h2 className="title">Button按钮</h2>
      <Typography>
        <Title level={3}>简介</Title>
        <Paragraph>
          <p>按钮用于开始一个即时操作。</p>
          <p>在 Ant Design 中我们提供了五种按钮。</p>
          <ul>
            <li>主按钮：用于主行动点，一个操作区域只能有一个主按钮。</li>
            <li>默认按钮：用于没有主次之分的一组行动点。</li>
            <li>虚线按钮：常用于添加操作。</li>
            <li>文本按钮：用于最次级的行动点。</li>
            <li>链接按钮：一般用于链接，即导航至某位置。</li>
          </ul>
        </Paragraph>
        <Title level={3}>使用场景</Title>
        <Paragraph>
          <p>标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。</p>
        </Paragraph>
      </Typography>
      <Title level={3}>案例</Title>
      <div className="Eg">
        <div className="showEg">
          <Row height={20}>
            <Col style={{ backgroundColor: 'red' }} />
          </Row>
          <Row height={20}>
            <Col span={30} offset="auto" style={{ backgroundColor: 'blue' }} />
          </Row>
          <Row gap={5} height={20}>
            <Col span={50} style={{ backgroundColor: 'red' }} />
            <Col span={15} style={{ backgroundColor: 'red' }} />
            <Col span={15} style={{ backgroundColor: 'red' }} />
            <Col span={15} style={{ backgroundColor: 'red' }} />
          </Row>
          <Row justify="end" height={20}>
            <Col span={5} style={{ backgroundColor: 'red' }} />
            <Col span={5} offset={1} style={{ backgroundColor: 'blue' }} />
            <Col span={5} style={{ backgroundColor: 'blue' }} />
            <Col span={50} style={{ backgroundColor: 'blue' }} />
          </Row>
          <Row aline="center" height={120}>
            <Col span={25} offset={1} style={{ backgroundColor: 'red', height: '20px' }} />
            <Col span={15} offset={1} style={{ backgroundColor: 'red', height: '100px' }} />
          </Row>
          <Row gap={20} justify="space-between" height={20}>
            <Col span={20} style={{ backgroundColor: 'red' }} />
            <Col span={20} style={{ backgroundColor: 'red' }} />
            <Col span={20} style={{ backgroundColor: 'red' }} />
            <Col span={20} style={{ backgroundColor: 'red' }} />
            <Col span={20} style={{ backgroundColor: 'red' }} />
            <Col span={20} style={{ backgroundColor: 'red' }} />
            <Col span={20} style={{ backgroundColor: 'red' }} />
            <Col span={20} style={{ backgroundColor: 'red' }} />
          </Row>
        </div>
        <Title level={3}>代码示例</Title>
        <div
          className="showCode"
          dangerouslySetInnerHTML={{
            __html: render()
          }}
        />
      </div>
      <Title level={3}>接口</Title>
      <div className="interface">
        <Table data={data} />
      </div>
    </div>
  );
};

export default GridEg;
