import React from 'react';
import { marked } from 'marked';
import hljs from 'highlight.js';
import { Button, Typography, Paragraph, Title, Table, Space } from '../../lib';
import { TableData } from '../../lib/Table/Table';
import '../content.scss';

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
const SpaceEg: React.FC = () => {
  const data: TableData = {
    header: ['属性', '说明', '类型', '默认值'],
    body: dataBody
  };
  const render = () => {
    return marked(
      '```html\n' +
        '<Button>按钮</Button>\n' +
        '<Button type="primary">按钮</Button>\n' +
        '<Button type="default">按钮</Button>\n' +
        '<Button type="link">按钮</Button>\n' +
        '<Button type="text">按钮</Button>\n' +
        '<Button type="dashed">按钮</Button>\n' +
        '<Button disabled>按钮</Button>\n' +
        '<Button radius>按钮</Button>\n' +
        '```',
      { breaks: true }
    );
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
          <div style={{ border: '1px solid rgba(0,0,0,.1)' }}>
            <Space>
              <div>
                <Button>Start</Button>
              </div>
              <div>
                <Button>Start</Button>
              </div>
              <div style={{ height: '100px', backgroundColor: 'orange', padding: '20px 0' }}>
                Start
              </div>
            </Space>
          </div>
        </div>
        <div style={{ border: '1px solid rgba(0,0,0,.1)' }}>
          <Space size={8} align="center" direction="row">
            <div>
              <Button>Center</Button>
            </div>
            <div>
              <Button>Center</Button>
            </div>
            <div style={{ height: '100px', backgroundColor: 'orange', padding: '20px 0' }}>
              Center
            </div>
          </Space>
        </div>
        <div style={{ border: '1px solid rgba(0,0,0,.1)' }}>
          <Space size={8} align="end" direction="row">
            <div>
              <Button>End</Button>
            </div>
            <div>
              <Button>End</Button>
            </div>
            <div style={{ height: '100px', backgroundColor: 'orange', padding: '20px 0' }}>End</div>
          </Space>
        </div>
        <div style={{ border: '1px solid rgba(0,0,0,.1)' }}>
          <Space size={8} align="baseline" direction="row">
            <div>
              <Button>Baseline</Button>
            </div>
            <div>
              <Button>Baseline</Button>
            </div>
            <div style={{ height: '100px', backgroundColor: 'orange', padding: '20px 0' }}>
              Baseline
            </div>
          </Space>
        </div>
        <div style={{ height: '200px', border: '1px solid rgba(0,0,0,.1)' }}>
          <Space direction="column">
            <div>
              <Button>Row</Button>
            </div>
            <div>
              <Button>Row</Button>
            </div>
            <div style={{ height: '100px', backgroundColor: 'orange', padding: '20px 0' }}>Row</div>
          </Space>
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

export default SpaceEg;
