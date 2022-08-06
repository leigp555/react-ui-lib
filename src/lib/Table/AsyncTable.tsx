import React, { HTMLAttributes, useEffect, useState } from 'react';
import styled from 'styled-components';
import './index.scss';
import Pagination from '../Pagination/Pagination ';
import Table from './Table';
import Loading from '../Loading/Loading';

export type TableData = {
  header: React.ReactNode[];
  body: { [key: string]: React.ReactNode }[];
  footer?: { title: string; result: string } | any;
};

export interface AsyncTableProps extends HTMLAttributes<HTMLDivElement> {
  currentData: TableData;
  callback: (currentPage: number, offset: number) => void;
  perPage: number;
  totalData: number;
  loading: boolean;
}
const AsyncTableWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
`;
const AsyncTableWrapStyled = styled.div`
  width: 100%;
`;

const AsyncTable: React.FC<AsyncTableProps> = (props) => {
  const { currentData, loading, perPage, callback, totalData } = props;
  const [page, setPage] = useState<number>(1);
  const fn = React.useCallback(
    (currentPage: number, start: number) => {
      callback(currentPage, start);
      setPage(currentPage);
    },
    [currentData]
  );
  useEffect(() => {
    callback(page, 0);
  }, []);
  return (
    <Loading loading={loading} style={{ width: '100%' }}>
      <AsyncTableWrap>
        <AsyncTableWrapStyled>
          <Table data={currentData} />
        </AsyncTableWrapStyled>
        <Pagination
          callback={fn}
          perPage={perPage}
          totalSrc={totalData}
          defaultPage={page}
          moreTool
          goTool
          statistic
        />
      </AsyncTableWrap>
    </Loading>
  );
};

export default AsyncTable;
