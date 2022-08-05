import React from 'react';
import { marked } from 'marked';
import hljs from 'highlight.js';
import {
  Button,
  Typography,
  Paragraph,
  Title,
  Table,
  Col,
  Header,
  LayoutWrap,
  Layout,
  Content,
  Footer,
  Sider,
  Row
} from '../../lib';
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
          <Layout>
            <Header bgc="red">
              <Row gap={0} justify="space-between" height={40}>
                <Col span={10} offset={2} justify="start">
                  xxx
                </Col>
                <Col span={30} justify="space-between" color="white">
                  <a href="/">导航一</a>
                  <a href="/">导航二</a>
                  <a href="/">导航三</a>
                  <a href="/">导航四</a>
                </Col>
                <Col span={10} justify="end">
                  <Button type="link">xxx</Button>
                </Col>
              </Row>
            </Header>
            <Content bgc="orange">
              <Row justify="center" height="200px">
                body
              </Row>
            </Content>
            <Footer bgc="yellow">
              <Row justify="center" height={50}>
                footer
              </Row>
            </Footer>
          </Layout>
          <Layout>
            <Header bgc="red">
              <Row gap={0} justify="start" height={40}>
                <Col span={10} offset={2} justify="start">
                  xxx
                </Col>
                <Col span={30} justify="space-between" color="white">
                  <a href="/">导航一</a>
                  <a href="/">导航二</a>
                  <a href="/">导航三</a>
                  <a href="/">导航四</a>
                </Col>
                <Col span={10} offset="auto" justify="end">
                  <Button type="link">xxx</Button>
                </Col>
              </Row>
            </Header>
            <Content bgc="orange" height={200}>
              <Sider bgc="#209140" style={{ width: '100px' }}>
                sider
              </Sider>
              <Row justify="center" bgc="pink">
                main
              </Row>
            </Content>
            <Footer bgc="yellow">
              <Row justify="center">footer</Row>
            </Footer>
          </Layout>
          <Layout>
            <Header bgc="red">
              <Row gap={0} justify="start" height={40}>
                <Col span={10} offset={2} justify="start">
                  zzz
                </Col>
                <Col span={30} justify="space-between" color="white">
                  <a href="/">导航一</a>
                  <a href="/">导航二</a>
                  <a href="/">导航三</a>
                  <a href="/">导航四</a>
                </Col>
                <Col span={10} offset="auto" justify="end">
                  <Button type="link">xx</Button>
                </Col>
              </Row>
            </Header>
            <Content bgc="orange" height={200}>
              <Row justify="center" bgc="pink">
                xxx
              </Row>
              <Sider bgc="#209140" style={{ width: '100px' }}>
                sider
              </Sider>
            </Content>
            <Footer bgc="yellow">
              <Row justify="center">footer</Row>
            </Footer>
          </Layout>
          <Layout>
            <Header bgc="red">
              <Row gap={0} justify="start" height={40}>
                <Col span={10} offset={2} justify="start">
                  xxx
                </Col>
                <Col span={30} justify="space-between" color="white">
                  <a href="/">导航一</a>
                  <a href="/">导航二</a>
                  <a href="/">导航三</a>
                  <a href="/">导航四</a>
                </Col>
                <Col span={10} offset="auto" justify="end">
                  <Button type="link">xxx</Button>
                </Col>
              </Row>
            </Header>
            <Content bgc="orange" height={200}>
              <Sider bgc="#209140" style={{ width: '100px' }}>
                sider
              </Sider>
              <Row justify="center" bgc="pink">
                xxx
              </Row>
              <Sider bgc="#209140" style={{ width: '100px' }}>
                sider
              </Sider>
            </Content>
            <Footer bgc="yellow">
              <Row justify="center">footer</Row>
            </Footer>
          </Layout>
          <LayoutWrap height={300}>
            <Sider bgc="#209140" style={{ width: '100px' }}>
              side
            </Sider>
            <Layout>
              <Header bgc="red">
                <Row justify="start" height={50}>
                  <Col span={10} offset={2} justify="start">
                    xxx
                  </Col>
                  <Col span={30} justify="space-between" color="white">
                    <a href="/">导航一</a>
                    <a href="/">导航二</a>
                    <a href="/">导航三</a>
                    <a href="/">导航四</a>
                  </Col>
                  <Col span={10} offset="auto" justify="end">
                    <Button type="link">xxx</Button>
                  </Col>
                </Row>
              </Header>
              <Content bgc="orange" height={200}>
                <Row justify="center" bgc="pink">
                  <div>main</div>
                </Row>
                <Sider bgc="#209140" style={{ width: '100px' }}>
                  sider
                </Sider>
              </Content>
              <Footer bgc="yellow" height={50}>
                <Row justify="center">footer</Row>
              </Footer>
            </Layout>
          </LayoutWrap>
          <LayoutWrap height={300}>
            <Sider bgc="#209140" style={{ width: '100px' }}>
              side
            </Sider>
            <Layout>
              <Header bgc="red">
                <Row justify="start" height={50}>
                  <Col span={10} offset={2} justify="start">
                    xxx
                  </Col>
                  <Col span={30} justify="space-between" color="white">
                    <a href="/">导航一</a>
                    <a href="/">导航二</a>
                    <a href="/">导航三</a>
                    <a href="/">导航四</a>
                  </Col>
                  <Col span={10} offset="auto" justify="end">
                    <Button type="link">xxx</Button>
                  </Col>
                </Row>
              </Header>
              <Content bgc="orange" height={200}>
                <Row justify="center" bgc="pink">
                  <div>main</div>
                </Row>
              </Content>
              <Footer bgc="yellow" height={50}>
                <Row justify="center">footer</Row>
              </Footer>
            </Layout>
          </LayoutWrap>
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
