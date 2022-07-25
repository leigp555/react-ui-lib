import React, { HTMLAttributes, ReactNode, useState } from 'react';
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
  perPage?: number;
  moreTool?: boolean;
  goTool?: boolean;
  statistic?: boolean;
}
const TableWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
`;
const TableStyled = styled.div`
  width: 100%;
`;

const Table: React.FC<Props> = (props) => {
  const { children, data, perPage, pagination, ...rest } = props;
  const [showData, setShowData] = useState<{ [key: string]: React.ReactNode }[]>(
    pagination ? data.body.slice(0, perPage) : data.body
  );
  const [page, setPage] = useState<number>(1);
  const fn = (currentPage: number, start: number, end: number) => {
    setShowData(data.body.slice(start, end));
    setPage(currentPage);
  };
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
    // console.log('执行了');
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
    <TableWrap>
      <TableStyled>{render()}</TableStyled>
      {pagination ? (
        <Pagination
          {...rest}
          perPage={perPage}
          callback={fn}
          defaultPage={page}
          totalSrc={data.body.length}
        />
      ) : (
        ''
      )}
    </TableWrap>
  );
};
Table.defaultProps = {
  children: '',
  pagination: false,
  perPage: 10,
  moreTool: false,
  statistic: false,
  goTool: false
};

export default Table;
