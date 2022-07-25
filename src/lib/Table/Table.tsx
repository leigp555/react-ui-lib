import React, { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import './index.scss';
import Pagination from '../Pagination/Pagination ';

type Data = {
  header: React.ReactNode[];
  body: { [key: string]: React.ReactNode }[];
  footer: { title: string; result: string };
};

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  data: Data;
}
const TableStyled = styled.div`
  width: 100%;
`;

const Table: React.FC<Props> = (props) => {
  const { children, data, ...rest } = props;

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
          {data.body.map((item: { [key: string]: React.ReactNode }) => {
            return <tr key={item.toString() + Math.random().toString()}>{bodyRender(item)}</tr>;
          })}
        </tbody>
        <tfoot>
          <tr>
            <td>{data.footer.title}</td>
            <td colSpan={data.header.length - 1}>{data.footer.result}</td>
          </tr>
        </tfoot>
      </table>
    );
  };
  return (
    <TableStyled {...rest}>
      <div>{render()}</div>
      <Pagination defaultPage={1} totalSrc={500} perPage={5} goTool moreTool />
    </TableStyled>
  );
};
Table.defaultProps = {
  children: ''
};

export default Table;
