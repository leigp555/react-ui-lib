import React from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import customLocale from 'dayjs/locale/zh-cn';
import Avatar from '../Avatar/Avatar';

dayjs.locale(customLocale);
dayjs.extend(relativeTime);

export interface CommentData {
  id: number;
  type: 'main' | 'replay';
  from_avatar: string;
  from_auth: React.ReactNode;
  to_auth: string;
  content: React.ReactNode;
  like_num: number;
  dislike_num: number;
  reply?: CommentData[];
  createdAt: string;
  updatedAt: string;
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const CommentItemStyled = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  flex-direction: column;
  > .wrap {
    display: flex;
    gap: 20px;
    > .avatar {
      align-self: start;
      display: inline-flex;
      align-items: center;
    }

    > .content {
      display: flex;
      flex-direction: column;
      gap: 8px;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial,
        Noto Sans, sans-serif, apple color emoji, segoe ui emoji, Segoe UI Symbol, noto color emoji;

      > .title {
        white-space: nowrap;
        color: #00000073;
        font-size: 12px;
        display: flex;
        align-items: center;
        gap: 10px;
      }

      > .description {
        word-wrap: break-word;
        color: #000000d9;
      }
    }
  }
`;

const NoChildren = styled.div`
  margin-left: 52px;
  margin-bottom: 10px;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

type Props = {
  data: CommentData[];
  actions: (item: CommentData) => React.ReactNode;
};

// 组件使用
const Comment: React.FC<Props> = (props) => {
  const { data, actions } = props;
  const render = (comments: CommentData[]): React.ReactNode => {
    return comments.map((item) => (
      <CommentItemStyled key={item.id}>
        <div className="wrap">
          <div className="avatar">
            <Avatar src={item.from_avatar} size={32} />
          </div>
          <div className="content">
            <div className="title">
              <span>{item.from_auth}</span>
              <span>{dayjs(item.createdAt).fromNow()}</span>
            </div>
            <div className="description">
              {item.type === 'main' ? (
                ''
              ) : (
                <span style={{ color: '#40a9ff', marginRight: '5px' }}>{`@${item.to_auth}:`}</span>
              )}
              {`${item.content}`}
            </div>
            <div className="action">{actions(item)}</div>
          </div>
        </div>
        {item.reply ? (
          <NoChildren key={item.id} style={{}}>
            {render(item.reply)}
          </NoChildren>
        ) : (
          ''
        )}
      </CommentItemStyled>
    ));
  };
  return <Wrap>{render(data)}</Wrap>;
};

export default Comment;
