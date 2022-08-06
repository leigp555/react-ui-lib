import React from 'react';
import { Button, Comment } from '../../lib';
import { CommentData } from '../../lib/Comment/Comment';
import AgreeIcon from '../../lib/icons/agree.svg';
import './index.scss';

const data: CommentData[] = [
  {
    id: 1,
    type: 'main',
    from_avatar: 'https://joeschmoe.io/api/v1/random',
    from_auth: 'Lorem1',
    to_auth: 'Auth',
    content: `Accusantium ad ducimus eos et
      exercitationem facilis itaque molestias necessitatibus odio, quod ratione rem similique
      voluptatum? Distinctio ipsam nostrum nulla quibusdam sed.`,
    like_num: 10,
    dislike_num: 0,
    createdAt: 'Thu Jul 28 2022 23:22:47 GMT+0800 (中国标准时间)',
    updatedAt: 'Thu Jul 28 2022 23:22:47 GMT+0800 (中国标准时间)'
  },
  {
    id: 2,
    type: 'main',
    from_avatar: 'https://joeschmoe.io/api/v1/random',
    from_auth: 'Lorem2',
    to_auth: 'Auth',
    content: `Accusantium ad ducimus eos et
      exercitationem facilis itaque molestias necessitatibus odio, quod ratione rem similique
      voluptatum? Distinctio ipsam nostrum nulla quibusdam sed.`,
    like_num: 10,
    dislike_num: 0,
    createdAt: 'Thu Jul 28 2022 23:22:47 GMT+0800 (中国标准时间)',
    updatedAt: 'Thu Jul 28 2022 23:22:47 GMT+0800 (中国标准时间)',
    reply: [
      {
        id: 3,
        type: 'replay',
        from_avatar: 'https://joeschmoe.io/api/v1/random',
        from_auth: 'Lorem2-1',
        to_auth: 'Lorem2',
        content: `Accusantium ad ducimus eos et
      exercitationem facilis itaque molestias necessitatibus odio, quod ratione rem similique
      voluptatum? Distinctio ipsam nostrum nulla quibusdam sed.`,
        like_num: 10,
        dislike_num: 0,
        createdAt: 'Thu Jul 28 2022 23:22:47 GMT+0800 (中国标准时间)',
        updatedAt: 'Thu Jul 28 2022 23:22:47 GMT+0800 (中国标准时间)'
      }
    ]
  },
  {
    id: 4,
    type: 'main',
    from_avatar: 'https://joeschmoe.io/api/v1/random',
    from_auth: 'Lorem3',
    to_auth: 'Auth',
    content: `Accusantium ad ducimus eos et
      exercitationem facilis itaque molestias necessitatibus odio, quod ratione rem similique
      voluptatum? Distinctio ipsam nostrum nulla quibusdam sed.`,
    like_num: 10,
    dislike_num: 0,
    createdAt: 'Thu Jul 28 2022 23:22:47 GMT+0800 (中国标准时间)',
    updatedAt: 'Thu Jul 28 2022 23:22:47 GMT+0800 (中国标准时间)',
    reply: [
      {
        id: 5,
        type: 'replay',
        from_avatar: 'https://joeschmoe.io/api/v1/random',
        from_auth: 'Lorem3-1',
        to_auth: 'Lorem3',
        content: `Accusantium ad ducimus eos et
      exercitationem facilis itaque molestias necessitatibus odio, quod ratione rem similique
      voluptatum? Distinctio ipsam nostrum nulla quibusdam sed.`,
        like_num: 10,
        dislike_num: 0,
        createdAt: 'Thu Jul 28 2022 23:22:47 GMT+0800 (中国标准时间)',
        updatedAt: 'Thu Jul 28 2022 23:22:47 GMT+0800 (中国标准时间)'
      },
      {
        id: 6,
        type: 'replay',
        from_avatar: 'https://joeschmoe.io/api/v1/random',
        from_auth: 'Lorem3-2',
        to_auth: 'Lorem3-1',
        content: `Accusantium ad ducimus eos et
      exercitationem facilis itaque molestias necessitatibus odio, quod ratione rem similique
      voluptatum? Distinctio ipsam nostrum nulla quibusdam sed.`,
        like_num: 10,
        dislike_num: 0,
        createdAt: 'Thu Jul 28 2022 23:22:47 GMT+0800 (中国标准时间)',
        updatedAt: 'Thu Jul 28 2022 23:22:47 GMT+0800 (中国标准时间)'
      }
    ]
  }
];

export const Demo: React.FC = () => {
  const actions = (item: CommentData) => {
    return (
      <div className="eg-actions">
        <div className="agree">
          <div className="agreeCount">
            <span>
              <AgreeIcon width="1em" height="1em" fill="black" />
            </span>
            <span>{item.like_num}</span>
          </div>
          <div className="opposeCount">
            <span>
              <AgreeIcon
                width="1em"
                height="1em"
                fill="black"
                style={{ transform: 'rotate(180deg)' }}
              />
            </span>
            <span>{item.dislike_num}</span>
          </div>
        </div>
        <Button type="link" style={{ fontSize: '12px' }}>
          回复
        </Button>
      </div>
    );
  };
  return (
    <div className="Eg">
      <Comment data={data} actions={actions} />
    </div>
  );
};
