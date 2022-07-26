import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import List from '../lib/List/List';
import Avatar from '../lib/Avatar/Avatar';
import ListItem from '../lib/List/ListItem';
import Button from '../lib/Button/Button';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

interface UserData {
  id: number;
  avatar: string;
  title: string;
  description: string;
}

// 伪造数据接口不用看
const createUserData = () => {
  const dataSrc: UserData[] = [];
  for (let i = 0; i < 10; i++) {
    dataSrc.push({
      id: i,
      avatar: 'https://joeschmoe.io/api/v1/random',
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      description: `Accusantium ad ducimus eos et
      exercitationem facilis itaque molestias necessitatibus odio, quod ratione rem similique
      voluptatum? Distinctio ipsam nostrum nulla quibusdam sed.`
    });
  }
  return dataSrc;
};
// 伪造数据接口不用看
// 模拟一些数据
const dataSrc = createUserData();
// 伪造数据接口不用看
// 模拟数据请求
const ajax = (
  url: string,
  offset: number,
  limit: number
): Promise<{ status: number; data: UserData[]; total: number }> => {
  return new Promise((resolve) => {
    if (url === '/data') {
      setTimeout(() => {
        resolve({
          status: 200,
          data: dataSrc.slice(offset, offset + limit),
          total: dataSrc.length
        });
      }, 1000);
    }
  });
};

// 组件使用
const Home: React.FC = () => {
  // 按钮式加载更多
  const [data, setData] = useState<UserData[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [isLoadFinish, setLoadFinish] = useState(false);
  // 分页式加载更多
  const [data2, setData2] = useState<UserData[]>([]);
  const [totalData, setTotalData] = useState<number>(0);
  const [isLoading2, setLoading2] = useState(false);
  const [isLoadFinish2, setLoadFinish2] = useState(false);

  // 初始化数据
  useEffect(() => {
    setLoading(true);
    setLoading2(true);
    ajax('/data', 0, 5).then((res) => {
      setLoading(false);
      setLoading2(false);
      setTotalData(res.total);
      setData((state) => {
        return [...state, ...res.data];
      });
      setData2((state) => {
        return [...state, ...res.data];
      });
    });
  }, []);
  // 加载更多回调函数
  const loadMore = () => {
    setLoading(true);
    ajax('/data', data.length, 5).then((res) => {
      setLoading(false);
      if (res.data[0]) {
        setData((state) => {
          return [...state, ...res.data];
        });
      } else {
        setLoadFinish(true);
      }
    });
  };
  // 分页的函数回调
  const paginateMore = (start: number) => {
    setLoading2(true);
    ajax('/data', start, 5).then((res) => {
      setLoading2(false);
      setTotalData(res.total);
      if (res.data[0]) {
        setData2(() => {
          return [...res.data];
        });
      } else {
        setLoadFinish2(true);
      }
    });
  };
  return (
    <Wrap>
      <List
        model="pagination"
        totalData={totalData}
        paginateCallback={paginateMore}
        data={data2}
        isLoading={isLoading2}
        isLoadFinish={isLoadFinish2}
        renderItem={(item: UserData) => (
          <ListItem
            key={`${Math.random() + item.id}`}
            avatar={<Avatar src={item.avatar} size={32} />}
            title={<span>{item.title}</span>}
            description={item.description}
            actions={
              <>
                <Button radius onClick={() => console.log('item id', item.id)}>
                  编辑
                </Button>
                <Button radius onClick={() => console.log('item id', item.id)}>
                  查看
                </Button>
              </>
            }
          />
        )}
      />
      <List
        model="loadMore"
        data={data}
        loadMoreCallback={loadMore}
        isLoading={isLoading}
        isLoadFinish={isLoadFinish}
        renderItem={(item: UserData) => (
          <ListItem
            key={`${Math.random() + item.id}`}
            avatar={<Avatar src={item.avatar} size={32} />}
            title={<span>{item.title}</span>}
            description={item.description}
            actions={
              <>
                <Button radius onClick={() => console.log('item id', item.id)}>
                  编辑
                </Button>
                <Button radius onClick={() => console.log('item id', item.id)}>
                  查看
                </Button>
              </>
            }
          />
        )}
      />
    </Wrap>
  );
};

export default Home;
