import React from 'react';
import styled from 'styled-components';
import Table from '../lib/Table/Table';
import Tag from '../lib/Tag/Tag';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
  align-items: start;
`;

const Home: React.FC = () => {
  const data = {
    header: ['姓名', '年龄', '班级', '身高', '体重'],
    body: [
      { 姓名: '张三', 年龄: 18, 班级: 335, 身高: 175, 体重: 99 },
      { 姓名: '张三', 年龄: 18, 班级: 335, 身高: 175, 体重: '' },
      { 姓名: '张三', 年龄: <Tag color="red">999</Tag>, 班级: 335, 身高: 175, 体重: 99 },
      { 姓名: '张三', 年龄: 18, 班级: 335, 身高: 175, 体重: 99 },
      { 姓名: '张三', 年龄: 18, 班级: 335, 身高: 175, 体重: 99 },
      { 姓名: '张三', 年龄: <Tag color="yellow">777</Tag>, 班级: 335, 身高: 175, 体重: 99 },
      { 姓名: '张三', 年龄: 18, 班级: 335, 身高: <Tag color="green">体重</Tag>, 体重: 99 },
      { 姓名: '张三', 年龄: 18, 班级: 335, 身高: 175, 体重: 99 }
    ],
    footer: { title: '总计', result: '100' }
  };
  return (
    <Wrap>
      <Table data={data} />
    </Wrap>
  );
};

export default Home;
