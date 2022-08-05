import React, { useEffect, useState } from 'react';
import { marked } from 'marked';
import hljs from 'highlight.js';
import {
  Typography,
  Paragraph,
  Title,
  Table,
  ItemGroup,
  Label,
  ColumnMenu,
  MenuItem,
  ColumnSub
} from '../../lib';
import { TableData } from '../../lib/Table/Table';
import '../content.scss';
import { menu } from './menu';

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
const MenuEg: React.FC = () => {
  const data: TableData = {
    header: ['属性', '说明', '类型', '默认值'],
    body: dataBody
  };
  const [order, setOrder] = useState<number>(1);
  useEffect(() => {
    console.log(order);
  }, [order]);
  const render = () => {
    return marked(menu, { breaks: true });
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
          <div style={{ display: 'flex', gap: '10px' }}>
            <div style={{ border: '1px solid rgba(100,100,100,.2)' }}>
              <ColumnMenu
                defaultOrder={order}
                setOrder={setOrder}
                style={{ width: '150px', height: '100%', gap: '50px' }}
              >
                <ColumnSub>
                  <ItemGroup>
                    <Label>标签1</Label>
                    <MenuItem order={1}>鼠标离开</MenuItem>
                    <MenuItem order={2}>鼠标离开</MenuItem>
                    <ItemGroup>
                      <Label>标签2</Label>
                      <MenuItem order={5}>
                        <div style={{ height: '40px', display: 'flex', alignItems: 'center' }}>
                          鼠标离开
                        </div>
                      </MenuItem>
                      <MenuItem order={6}>
                        <div style={{ height: '40px', display: 'flex', alignItems: 'center' }}>
                          鼠标离开
                        </div>
                      </MenuItem>
                      <MenuItem order={7}>
                        <div style={{ height: '40px', display: 'flex', alignItems: 'center' }}>
                          鼠标离开
                        </div>
                      </MenuItem>
                    </ItemGroup>
                  </ItemGroup>
                  <ItemGroup>
                    <Label>标签3</Label>
                    <MenuItem order={11}>
                      <div style={{ height: '40px', display: 'flex', alignItems: 'center' }}>
                        鼠标离开
                      </div>
                    </MenuItem>
                    <MenuItem order={12}>
                      <div style={{ height: '40px', display: 'flex', alignItems: 'center' }}>
                        鼠标离开
                      </div>
                    </MenuItem>
                    <MenuItem order={13}>
                      <div style={{ height: '40px', display: 'flex', alignItems: 'center' }}>
                        鼠标离开
                      </div>
                    </MenuItem>
                  </ItemGroup>
                </ColumnSub>
              </ColumnMenu>
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

export default MenuEg;
