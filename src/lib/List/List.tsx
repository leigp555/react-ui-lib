import React, { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import Skeleton from '../Skeleton/Skeleton';
import SkeletonItem from '../Skeleton/SkeletonItem';

interface Props extends HTMLAttributes<HTMLDivElement> {
  data: any[];
  renderItem: (item: any) => ReactNode;
  loadMore?: (() => void) | undefined;
  isLoading?: boolean;
  isLoadFinish?: boolean;
}
const ListStyled = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  scroll-behavior: smooth;
`;
const LoadMore = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;
  justify-content: center;
`;

const List: React.FC<Props> = (props) => {
  const { renderItem, loadMore, isLoading, isLoadFinish, data } = props;
  return (
    <ListStyled>
      {data.map((item) => renderItem(item))}
      <Skeleton loading={isLoading} active>
        <Skeleton>
          <SkeletonItem span={100} offset={0} />
        </Skeleton>
        <SkeletonItem span={100} offset={0} />
        <SkeletonItem span={100} offset={0} />
        <SkeletonItem span={100} offset={0} />
        <SkeletonItem span={100} offset={0} />
        <SkeletonItem span={100} offset={0} />
      </Skeleton>
      {loadMore ? (
        <LoadMore>
          {isLoadFinish ? (
            <span>
              没有更多了,
              <a href="/#" style={{ color: '#1890ff' }}>
                返回顶部?
              </a>
            </span>
          ) : (
            <Button disabled={!!isLoading} onClick={loadMore}>
              加载更多
            </Button>
          )}
        </LoadMore>
      ) : (
        ''
      )}
    </ListStyled>
  );
};
List.defaultProps = {
  loadMore: undefined,
  isLoading: false,
  isLoadFinish: false
};

export default List;
