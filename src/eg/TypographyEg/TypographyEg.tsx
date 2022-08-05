import React from 'react';
import { marked } from 'marked';
import hljs from 'highlight.js';
import { Text, Divider, Typography, Paragraph, Title, Table } from '../../lib';
import 'highlight.js/styles/github-dark-dimmed.css';
import { TableData } from '../../lib/Table/Table';
import { typography } from './typography';
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
const TypographyEg: React.FC = () => {
  const data: TableData = {
    header: ['属性', '说明', '类型', '默认值'],
    body: dataBody
  };
  const render = () => {
    return marked(typography, { breaks: true });
  };
  return (
    <div className="content-wrap">
      <h2 className="title">Typography 排版</h2>
      <Typography>
        <Title level={3}>简介</Title>
        <Paragraph>
          <p>文本的基本格式。</p>
        </Paragraph>
        <Title level={3}>使用场景</Title>
        <Paragraph>
          <ul>
            <li>当需要展示标题、段落、列表内容时使用，如文章/博客/日志的文本样式。</li>
            <li>当需要一列基于文本的基础操作时，如拷贝/省略/可编辑。</li>
          </ul>
        </Paragraph>
      </Typography>
      <Title level={3}>案例</Title>
      <div className="Eg">
        <div className="showEg">
          <Typography>
            <Title>Introduction</Title>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut debitis dignissimos
              dolore, doloribus enim eveniet, explicabo fugiat id impedit iure laboriosam laborum
              nobis officia praesentium quasi sed sequi tempora, unde.
            </Paragraph>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolore dolorem
              ducimus facilis hic possimus praesentium totam unde? Ipsa nam, soluta? Ad et quasi,
              ratione repudiandae sunt tempora temporibus veritatis.
              <Text strong>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, et, natus? Ad
                delectus deserunt doloribus, error explicabo id illum incidunt laborum minima,
                officiis, pariatur quasi reprehenderit sint? Dolores, tempora, vitae.
              </Text>
            </Paragraph>
            <Title level={2}> Lorem ipsum dolor sit amet,</Title>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur commodi
              corporis debitis, doloribus ducimus error excepturi exercitationem facilis id iure
              maxime modi nostrum optio quas recusandae repellendus sed suscipit? (
              <Text code>Lorem</Text> and
              <Text code>Lorem</Text>), Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aliquid, aspernatur consequuntur deserunt dolorum ex inventore ipsa ipsam magnam magni
              minus molestias nam natus numquam optio perspiciatis quos temporibus vel veniam?
            </Paragraph>

            <Paragraph>
              <ul>
                <li>
                  <a href="/docs/spec/proximity">Principles</a>
                </li>
                <li>
                  <a href="/docs/spec/overview">Patterns</a>
                </li>
                <li>
                  <a href="/docs/resources">Resource Download</a>
                </li>
              </ul>
            </Paragraph>

            <Paragraph>
              Press <Text keyboard>Esc</Text> to exit...
            </Paragraph>

            <Divider />

            <Title>Introduction</Title>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, animi aut
              deserunt exercitationem ipsa ut. Ab, amet aut consequatur doloribus excepturi id
              labore maiores perspiciatis quidem suscipit totam unde voluptatibus.
            </Paragraph>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet enim molestias
              perferendis sed vel. Deleniti distinctio facilis fugiat officiis quo! Est fugit magnam
              officia provident quidem, vitae. In pariatur, tempore.
              <Text mark>『amet』和『dolor』</Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit
              <Text strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit</Text>。
            </Paragraph>
            <Title level={2}>Lorem ipsum dolor sit amet, consectetur adipisicing elit</Title>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at cum distinctio ea
              eveniet exercitationem facilis iusto maiores minus mollitia nostrum, nulla placeat rem
              repellendus rerum, sed veniam vero voluptatibus?（<Text code>Sketch</Text> 和
              <Text code>Axure</Text>），Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Adipisci amet blanditiis consectetur consequatur ducimus, earum, error fugit in
              mollitia quam quibusdam quod reiciendis rem reprehenderit, rerum sed ullam voluptates
              voluptatum.。
            </Paragraph>

            <Paragraph>
              <ul>
                <li>
                  <a href="/docs/spec/proximity-cn">reprehenderit</a>
                </li>
                <li>
                  <a href="/docs/spec/overview-cn">reprehenderit</a>
                </li>
                <li>
                  <a href="/docs/resources-cn">reprehenderit</a>
                </li>
              </ul>
            </Paragraph>

            <Paragraph>
              <blockquote>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias aliquam aliquid
                doloribus, ducimus enim explicabo fugiat, harum nulla praesentium quia quis
                repellendus temporibus unde velit voluptatem voluptatibus! Fugit, saepe?
              </blockquote>
              <pre style={{ marginTop: '10px' }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium doloremque
                error illum laboriosam odit, provident quaerat reiciendis rem velit voluptatibus!
                Cupiditate dignissimos est illum impedit natus neque reiciendis unde voluptatibus?
              </pre>
            </Paragraph>

            <Paragraph>
              press <Text keyboard>Esc</Text> out
            </Paragraph>
          </Typography>
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

export default TypographyEg;
