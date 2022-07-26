import React, { useCallback, useEffect, useState } from 'react';
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
const createUserData = (total: number) => {
  const dataSrc: UserData[] = [];
  for (let i = 0; i < total; i++) {
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
const dataSrc1 = createUserData(10);
const dataSrc2 = createUserData(1000);
// 伪造数据接口不用看
// 模拟数据请求
const ajax = (
  url: string,
  offset: number,
  limit: number
): Promise<{ status: number; data: UserData[]; total: number }> => {
  return new Promise((resolve) => {
    if (url === '/loadmore') {
      setTimeout(() => {
        resolve({
          status: 200,
          data: dataSrc1.slice(offset, offset + limit),
          total: dataSrc1.length
        });
      }, 1000);
    } else if (url === '/paginate') {
      setTimeout(() => {
        resolve({
          status: 200,
          data: dataSrc2.slice(offset, offset + limit),
          total: dataSrc2.length
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
    // 按钮时加载初始化数据
    setLoading(true);
    ajax('/loadmore', 0, 5).then((res) => {
      setLoading(false);
      setData((state) => {
        return [...state, ...res.data];
      });
    });
    // 分页式加载初始化数据
    setLoading2(true);
    ajax('/paginate', 0, 5).then((res) => {
      setLoading2(false);
      setTotalData(res.total);
      setData2((state) => {
        return [...state, ...res.data];
      });
    });
  }, []);
  // 加载更多回调函数
  const loadMore = useCallback(() => {
    setLoading(true);
    ajax('/loadmore', data.length, 5).then((res) => {
      setLoading(false);
      if (res.data[0]) {
        setData((state) => {
          return [...state, ...res.data];
        });
      } else {
        setLoadFinish(true);
      }
    });
  }, [isLoading]);
  // 分页的函数回调
  const paginateMore = useCallback((start: number) => {
    setLoading2(true);
    ajax('/paginate', start, 5).then((res) => {
      setLoading2(false);
      if (res.data[0]) {
        setData2(() => {
          return [...res.data];
        });
      } else {
        setLoadFinish2(true);
      }
    });
  }, []);
  return (
    <Wrap>
      <List
        model="pagination"
        perPage={5} // 这个数据根据每次请求多少条数据来,不能瞎写不然分页数会乱
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
      <List
        model="normal"
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
