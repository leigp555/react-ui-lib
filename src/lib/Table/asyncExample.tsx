// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react';
// import styled from 'styled-components';
// import AsyncTable, { TableData } from '../lib/Table/AsyncTable';
//
// const Wrap = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 50px;
//   justify-content: center;
//   align-items: start;
// `;
//
// const Home: React.FC = () => {
//   const createData = () => {
//     const data = [];
//     for (let i = 0; i < 10000; i++) {
//       data.push({
//         姓名: '张三',
//         年龄: Math.floor(Math.random() * 10 ** 3),
//         班级: 335,
//         身高: 175,
//         体重: 99
//       });
//     }
//     return data;
//   };
//   const allData = createData();
//   // 模拟数据请求
//   const ajax = (url: string, offset: number, limit: number) => {
//     return new Promise((resolve) => {
//       if (url === '/data') {
//         setTimeout(() => {
//           resolve({
//             status: 200,
//             data: allData.slice(offset, offset + limit),
//             total: allData.length
//           });
//         }, 500);
//       }
//     });
//   };
//   // 总条数
//   const [totalSrc, setTotalData] = useState<number>(0);
//   // 是否加载
//   const [isLoading, setLoading] = useState<boolean>(true);
//   // 数据源
//   const [dataSrc, setData] = useState<TableData>({
//     header: ['姓名', '年龄', '班级', '身高', '体重'],
//     body: [],
//     footer: {
//       title: '总计',
//       result: '0'
//     }
//   });
//   // 函数每次翻页都会执行
//   const fn = (currentPage: number, offset: number) => {
//     setLoading(true);
//     (
//       ajax('/data', offset, 10) as Promise<{
//         status: number;
//         data: { [key: string]: React.ReactNode }[];
//         total: number;
//       }>
//     ).then((res) => {
//       setData((state) => ({
//         ...state,
//         body: res.data,
//         footer: {
//           ...state.footer,
//           result: `${res.total.toString()} 条数据`
//         }
//       }));
//       setTotalData(res.total);
//       setLoading(false);
//     });
//   };
//   return (
//     <Wrap>
//       <AsyncTable
//         loading={isLoading}
//         callback={fn}
//         currentData={dataSrc}
//         totalData={totalSrc}
//         perPage={10} // 与上面的limit一样
//       />
//     </Wrap>
//   );
// };
//
// export default Home;
