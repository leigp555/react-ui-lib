import React from 'react';
import styled from 'styled-components';

import Avatar from '../Avatar/Avatar';

export interface CommentData {
  id: number;
  avatar: string;
  title: string;
  description: string;
  createdAt: string;
  reply?: CommentData[];
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
      > .title {
        white-space: nowrap;
        font-weight: 700;
        font-size: 14px;
        display: flex;
        align-items: center;
        gap: 10px;
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
};

// 组件使用
const Comment: React.FC<Props> = (props) => {
  const { data } = props;
  const render = (comments: Partial<CommentData>[] | []): React.ReactNode => {
    return comments.map((item) => (
      <CommentItemStyled key={item.id}>
        <div className="wrap">
          <div className="avatar">
            <Avatar src={item.avatar} size={32} />
          </div>
          <div className="content">
            <div className="title">{item.title}</div>
            <div className="description">{item.description}</div>
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
