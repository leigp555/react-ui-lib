import React, { useState } from 'react';
import { marked } from 'marked';
import hljs from 'highlight.js';
import { Steps, Typography, Paragraph, Title, Table, Button, Tip, Step } from '../../lib';
import { TableData } from '../../lib/Table/Table';
import '../content.scss';
import { button } from './steps';
import './index.scss';

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
const steps = [
  {
    title: '步骤一',
    content: '内容一'
  },
  {
    title: '步骤二',
    content: '内容二'
  },
  {
    title: '步骤三',
    content: '内容三'
  }
];

const StepsEg: React.FC = () => {
  const data: TableData = {
    header: ['属性', '说明', '类型', '默认值'],
    body: dataBody
  };
  const render = () => {
    return marked(button, { breaks: true });
  };
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
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
          <div className="row">
            <Steps current={current}>
              {steps.map((item) => (
                <Step key={item.title} value={item.title} />
              ))}
            </Steps>
            <div className="steps-content">{steps[current].content}</div>
            <div className="steps-action">
              {current > 0 && (
                <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                  Previous
                </Button>
              )}
              {current === steps.length - 1 && (
                <Button type="primary" onClick={() => Tip('success', 'Processing complete!')}>
                  Done
                </Button>
              )}
              {current < steps.length - 1 && (
                <Button type="primary" onClick={() => next()}>
                  Next
                </Button>
              )}
            </div>
          </div>
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

export default StepsEg;
