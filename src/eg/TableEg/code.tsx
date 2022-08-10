import { translate } from '../translate';

const createData = () => {
  const data = [];
  for (let i = 0; i < 10000; i++) {
    data.push({ 姓名: '李四', 年龄: i, 班级: 400, 身高: 175, 体重: 99 });
  }
  return data;
};
const allData: string[] = [];
const res = {
  status: 200,
  data: allData.slice(0, 0 + 0),
  total: allData.length
};

export const code = translate(`
import { AsyncTable, Table, Tag } from 'uix-react';\n
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
  { 姓名: '张三', 年龄: 15, 班级: 335, 身高: 175, 体重: 99 },
  { 姓名: '张三', 年龄: 16, 班级: 335, 身高: 175, 体重: 99 },
  { 姓名: '张三', 年龄: 17, 班级: 335, 身高: 175, 体重: 99 },
  { 姓名: '张三', 年龄: 18, 班级: 335, 身高: 175, 体重: 99 },
  { 姓名: '张三', 年龄: 19, 班级: 335, 身高: 175, 体重: 99 },
  { 姓名: '张三', 年龄: 20, 班级: 335, 身高: 175, 体重: 99 }
];
const createData = () => {
  const data = [];
  for (let i = 0; i < 10000; i++) {
    data.push({ 姓名: '李四', 年龄: i, 班级: 400, 身高: 175, 体重: 99 });
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
  footer: { title: '总计', result: \`${createData().length.toString()} 条数据\` }
};

const allData = createData();
// 模拟数据请求
const ajax = (url: string, offset: number, limit: number) => {
  return new Promise((resolve) => {
    if (url === '/data') {
      setTimeout(() => {
        resolve({
          status: 200,
          data: allData.slice(offset, offset + limit),
          total: allData.length
        });
      }, 500);
    }
  });
};

export const App:React.RC=()=>{
 // 总条数
  const [totalSrc, setTotalData] = useState<number>(0);
  // 是否加载
  const [isLoading, setLoading] = useState<boolean>(true);
  // 数据源
  const [dataSrc, setData] = useState<TableData>({
    header: ['姓名', '年龄', '班级', '身高', '体重'],
    body: [],
    footer: {
      title: '总计',
      result: '0'
    }
  });
  // 函数每次翻页都会执行
  const fn = (currentPage: number, offset: number) => {
    setLoading(true);
    (
      ajax('/data', offset, 10) as Promise<{
        status: number;
        data: { [key: string]: React.ReactNode }[];
        total: number;
      }>
    ).then((res) => {
      setData((state) => ({
        ...state,
        body: res.data,
        footer: {
          ...state.footer,
          result: \`${res.total.toString()} 条数据\`
        }
      }));
      setTotalData(res.total);
      setLoading(false);
    });
  };
  return (
    <div className="Eg">
      <Table data={data} pagination statistic />
      <Table data={data2} />
      <Table data={data3} pagination goTool moreTool statistic perPage={10} />
      <AsyncTable
        loading={isLoading}
        callback={fn}
        currentData={dataSrc}
        totalData={totalSrc}
        perPage={10} // 与上面的limit一样
      />
    </div>
  );
}
`);
