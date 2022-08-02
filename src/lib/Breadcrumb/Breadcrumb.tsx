import React, { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';

const BreadcrumbStyled = styled.div`
  display: flex;
  align-items: center;
  height: 1.5em;
  line-height: 1.5em;
  text-align: center;
  gap: 5px;
`;

export interface BreadcrumbProps extends HTMLAttributes<HTMLDivElement> {
  separator?: string;
  renderItem: (item: any) => ReactNode;
  data: any[];
  children?: React.ReactNode;
}
const Wrap = styled.div`
  display: flex;
  gap: 2px;
`;

const Breadcrumb: React.FC<BreadcrumbProps> = (props) => {
  const { children, separator, renderItem, data, ...rest } = props;
  const render = () => {
    return data.map((item, index) => {
      if (index !== 0) {
        return (
          <Wrap key={Math.random()}>
            <span>{separator}</span>
            <span>{renderItem(item)}</span>
          </Wrap>
        );
      }
      return <div key={Math.random()}>{renderItem(item)}</div>;
    });
  };
  return <BreadcrumbStyled {...rest}>{render()}</BreadcrumbStyled>;
};
Breadcrumb.defaultProps = {
  separator: '/',
  children: ''
};

export default Breadcrumb;
