import React, { HTMLAttributes, ReactNode, useState } from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import Skeleton from '../Skeleton/Skeleton';
import SkeletonItem from '../Skeleton/SkeletonItem';
import Pagination from '../Pagination/Pagination ';

interface Props extends HTMLAttributes<HTMLDivElement> {
  data: any[];
  renderItem: (item: any) => ReactNode;
  loadMoreCallback?: () => void;
  paginateCallback?: (start: number) => void;
  isLoading?: boolean;
  isLoadFinish?: boolean;
  model: 'loadMore' | 'pagination' | 'normal';
  totalData?: number;
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
  const {
    renderItem,
    model,
    totalData,
    loadMoreCallback,
    paginateCallback,
    isLoading,
    isLoadFinish,
    data
  } = props;
  const [currentPage, setPage] = useState<number>(1);
  const fn = (page: number, start: number) => {
    paginateCallback!(start);
    setPage(page);
  };
  const bottomRender = () => {
    if (model === 'normal') {
      return '';
    }
    if (model === 'loadMore') {
      return (
        <LoadMore>
          {isLoadFinish ? (
            <span>
              没有更多了,
              <a href="/#" style={{ color: '#1890ff' }}>
                返回顶部?
              </a>
            </span>
          ) : (
            <Button disabled={!!isLoading} onClick={loadMoreCallback}>
              加载更多
            </Button>
          )}
        </LoadMore>
      );
    }
    if (model === 'pagination') {
      return (
        <LoadMore>
          <Pagination
            callback={fn}
            defaultPage={currentPage}
            totalSrc={totalData!}
            perPage={5}
            moreTool
            statistic
            goTool
          />
        </LoadMore>
      );
    }
  };

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
      {bottomRender()}
    </ListStyled>
  );
};
List.defaultProps = {
  loadMoreCallback: () => {},
  paginateCallback: () => {},
  isLoading: false,
  isLoadFinish: false,
  totalData: 0
};

export default List;
