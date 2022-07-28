import React from 'react';
import styled from 'styled-components';
import Comment from '../lib/Comment/Comment';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export interface CommentData {
  id: number;
  avatar: string;
  title: string;
  description: string;
  createdAt: string;
  reply?: CommentData[];
}

const data: CommentData[] = [
  {
    id: 1,
    avatar: 'https://joeschmoe.io/api/v1/random',
    title: 'Lorem1',
    createdAt: 'Thu Jul 28 2022 23:22:47 GMT+0800 (中国标准时间)',
    description: `Accusantium ad ducimus eos et
      exercitationem facilis itaque molestias necessitatibus odio, quod ratione rem similique
      voluptatum? Distinctio ipsam nostrum nulla quibusdam sed.`
  },
  {
    id: 2,
    avatar: 'https://joeschmoe.io/api/v1/random',
    title: 'Lorem2',
    createdAt: 'Thu Jul 22 2022 23:22:47 GMT+0800 (中国标准时间)',
    description: `Accusantium ad ducimus eos et
      exercitationem facilis itaque molestias necessitatibus odio, quod ratione rem similique
      voluptatum? Distinctio ipsam nostrum nulla quibusdam sed.`,
    reply: [
      {
        id: 2 - 1,
        avatar: 'https://joeschmoe.io/api/v1/random',
        title: 'Lorem2-1',
        createdAt: 'Thu Jul 23 2022 23:22:47 GMT+0800 (中国标准时间)',
        description: `Accusantium ad ducimus eos et
      exercitationem facilis itaque molestias necessitatibus odio, quod ratione rem similique
      voluptatum? Distinctio ipsam nostrum nulla quibusdam sed.`
      }
    ]
  },
  {
    id: 3,
    avatar: 'https://joeschmoe.io/api/v1/random',
    title: 'Lorem3',
    createdAt: 'Thu Jul 26 2022 23:22:47 GMT+0800 (中国标准时间)',
    description: `Accusantium ad ducimus eos et
      exercitationem facilis itaque molestias necessitatibus odio, quod ratione rem similique
      voluptatum? Distinctio ipsam nostrum nulla quibusdam sed.Accusantium ad ducimus eos et
      exercitationem facilis itaque molestias necessitatibus odio, quod ratione rem similique
      voluptatum? Distinctio ipsam nostrum nulla quibusdam sed.`,
    reply: [
      {
        id: 3 - 1,
        avatar: 'https://joeschmoe.io/api/v1/random',
        title: 'Lorem3-1',
        createdAt: 'Thu Jul 27 2022 23:22:47 GMT+0800 (中国标准时间)',
        description: `Accusantium ad ducimus eos et
      exercitationem facilis itaque molestias necessitatibus odio, quod ratione rem similique
      voluptatum? Distinctio ipsam nostrum nulla quibusdam sed.`
      },
      {
        id: 3 - 2,
        avatar: 'https://joeschmoe.io/api/v1/random',
        createdAt: 'Thu Jul 28 2022 23:22:47 GMT+0800 (中国标准时间)',
        title: 'Lorem3-2',
        description: `Accusantium ad ducimus eos et
      exercitationem facilis itaque molestias necessitatibus odio, quod ratione rem similique
      voluptatum? Distinctio ipsam nostrum nulla quibusdam sed.`
      }
    ]
  }
];

// 组件使用
const Home: React.FC = () => {
  return (
    <Wrap>
      <Comment data={data} />
    </Wrap>
  );
};

export default Home;
