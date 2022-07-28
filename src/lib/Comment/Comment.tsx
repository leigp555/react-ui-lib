import React from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import customLocale from 'dayjs/locale/zh-cn';
import Avatar from '../Avatar/Avatar';
import AgreeIcon from '../icons/agree.svg';
import Button from '../Button/Button';

dayjs.locale(customLocale);
dayjs.extend(relativeTime);

export interface CommentData {
  id: number;
  avatar: string;
  title: React.ReactNode;
  description: React.ReactNode;
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
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial,
        Noto Sans, sans-serif, apple color emoji, segoe ui emoji, Segoe UI Symbol, noto color emoji;
      > .title {
        white-space: nowrap;
        color: #00000073;
        font-size: 14px;
        display: flex;
        align-items: center;
        gap: 10px;
      }
      > .description {
        word-wrap: break-word;
        color: #000000d9;
      }
      > .action {
        display: flex;
        align-items: center;
        > .agree {
          display: flex;
          align-items: center;
          gap: 15px;
          > .agreeCount,
          .opposeCount {
            font-size: 12px;
            display: inline-flex;
            align-items: center;
            gap: 5px;
            cursor: pointer;
            span {
              display: flex;
              align-items: center;
            }
          }
          > .opposeCount {
            font-size: 12px;
          }
        }
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
            <div className="title">
              <span>{item.title}</span>
              <span>{dayjs(item.createdAt).fromNow()}</span>
            </div>
            <div className="description">{item.description}</div>
            <div className="action">
              <div className="agree">
                <div className="agreeCount">
                  <span>
                    <AgreeIcon width="1em" height="1em" fill="black" />
                  </span>
                  <span>10</span>
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
                  <span>20</span>
                </div>
              </div>
              <Button type="link" style={{ fontSize: '12px' }}>
                回复
              </Button>
            </div>
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
