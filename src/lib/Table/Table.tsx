import React, { HTMLAttributes, ReactNode, useEffect, useState } from 'react';
import styled from 'styled-components';
import './index.scss';
import Pagination from '../Pagination/Pagination ';

export type TableData = {
  header: React.ReactNode[];
  body: { [key: string]: React.ReactNode }[];
  footer?: { title: string; result: string };
};

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  data: TableData;
  pagination?: boolean;
}
const TableWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
`;
const TableStyled = styled.div`
  width: 100%;
`;

const Table: React.FC<Props> = (props) => {
  const { children, data, pagination, ...rest } = props;
  const [showData, setShowData] = useState<{ [key: string]: React.ReactNode }[]>([]);
  const [page, setPage] = useState<number>(1);
  const fn = (currentPage: number, start: number, end: number) => {
    setShowData(data.body.slice(start, end));
    setPage(currentPage);
  };
  useEffect(() => {
    if (pagination) {
      // 需要分页
      setShowData(data.body.slice(0, 5));
    } else {
      // 不需要分页
      setShowData(data.body);
    }
  }, []);
  const bodyRender = (arr: { [key: string]: React.ReactNode }) => {
    const vNode: ReactNode[] = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const key in arr) {
      // eslint-disable-next-line no-prototype-builtins
      if (arr.hasOwnProperty(key))
        vNode.push(<td key={arr[key] + Math.random().toString()}>{arr[key]}</td>);
    }
    return vNode;
  };
  const render = () => {
    return (
      <table id="ui-table">
        <thead>
          <tr>
            {data.header.map((item) => {
              return (
                <th key={item + Math.random().toString()}>
                  <div>{item}</div>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {showData.map((item: { [key: string]: React.ReactNode }) => {
            return <tr key={item.toString() + Math.random().toString()}>{bodyRender(item)}</tr>;
          })}
        </tbody>
        {data.footer ? (
          <tfoot>
            <tr>
              <td>{data.footer.title}</td>
              <td colSpan={data.header.length - 1}>{data.footer.result}</td>
            </tr>
          </tfoot>
        ) : (
          ''
        )}
      </table>
    );
  };
  return (
    <TableWrap {...rest}>
      <TableStyled>{render()}</TableStyled>
      {pagination ? (
        <Pagination callback={fn} defaultPage={page} totalSrc={data.body.length} perPage={5} />
      ) : (
        ''
      )}
    </TableWrap>
  );
};
Table.defaultProps = {
  children: '',
  pagination: false
};

export default Table;
