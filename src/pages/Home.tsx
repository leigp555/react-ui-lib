import React from 'react';
import styled from 'styled-components';
import Table, { TableData } from '../lib/Table/Table';
import Tag from '../lib/Tag/Tag';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
  align-items: start;
`;

const Home: React.FC = () => {
  const dataBody = [
    { 姓名: '张三', 年龄: 1, 班级: 335, 身高: 175, 体重: 99 },
    { 姓名: '张三', 年龄: 2, 班级: 335, 身高: 175, 体重: '' },
    { 姓名: '张三', 年龄: <Tag color="red">999</Tag>, 班级: 335, 身高: 175, 体重: 99 },
    { 姓名: '张三', 年龄: 4, 班级: 335, 身高: 175, 体重: 99 },
    { 姓名: '张三', 年龄: 5, 班级: 335, 身高: 175, 体重: 99 },
    { 姓名: '张三', 年龄: <Tag color="yellow">777</Tag>, 班级: 335, 身高: 175, 体重: 99 },
    { 姓名: '张三', 年龄: 7, 班级: 335, 身高: <Tag color="green">体重</Tag>, 体重: 99 },
    { 姓名: '张三', 年龄: 8, 班级: 335, 身高: 175, 体重: 99 },
    { 姓名: '张三', 年龄: 9, 班级: 335, 身高: 175, 体重: 99 },
    { 姓名: '张三', 年龄: 10, 班级: 335, 身高: 175, 体重: 99 },
    { 姓名: '张三', 年龄: 11, 班级: 335, 身高: 175, 体重: 99 },
    { 姓名: '张三', 年龄: 12, 班级: 335, 身高: 175, 体重: 99 },
    { 姓名: '张三', 年龄: 13, 班级: 335, 身高: 175, 体重: 99 },
    { 姓名: '张三', 年龄: 14, 班级: 335, 身高: 175, 体重: 99 },
    { 姓名: '张三', 年龄: 15, 班级: 335, 身高: 175, 体重: 99 }
  ];
  const createData = () => {
    const data = [];
    for (let i = 0; i < 10000; i++) {
      data.push({ 姓名: '张三', 年龄: Math.random(), 班级: 335, 身高: 175, 体重: 99 });
    }
    return data;
  };
  const data: TableData = {
    header: ['姓名', '年龄', '班级', '身高', '体重'],
    body: dataBody,
    footer: { title: '总计', result: dataBody.length.toString() }
  };
  const data2: TableData = {
    header: ['姓名', '年龄', '班级', '身高', '体重'],
    body: dataBody
  };
  const data3: TableData = {
    header: ['姓名', '年龄', '班级', '身高', '体重'],
    body: createData(),
    footer: { title: '总计', result: `${createData().length.toString()} 条数据` }
  };
  return (
    <Wrap>
      <Table data={data3} pagination goTool moreTool statistic />
      <Table data={data} pagination goTool moreTool statistic />
      <Table data={data2} />
    </Wrap>
  );
};

export default Home;
