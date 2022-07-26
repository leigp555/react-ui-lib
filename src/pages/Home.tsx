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
// 模拟一些数据
const dataSrc = createUserData();
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

const Home: React.FC = () => {
  const [data, setData] = useState<UserData[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [isLoadFinish, setloadFinish] = useState(false);
  // 初始化数据
  useEffect(() => {
    setLoading(true);
    ajax('/data', 0, 5).then((res) => {
      setLoading(false);
      setData((state) => {
        return [...state, ...res.data];
      });
    });
  }, []);
  const loadMore = () => {
    setLoading(true);
    ajax('/data', data.length, 5).then((res) => {
      setLoading(false);
      if (res.data[0]) {
        setData((state) => {
          return [...state, ...res.data];
        });
      } else {
        setloadFinish(true);
      }
    });
  };
  return (
    <Wrap>
      <List
        data={data}
        loadMore={loadMore}
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
                <Button radius onClick={() => console.log(item.id)}>
                  编辑
                </Button>
                <Button radius onClick={() => console.log(item.id)}>
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
