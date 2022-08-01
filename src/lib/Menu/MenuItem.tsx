import React, { HTMLAttributes, useContext } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { columnMenuCtx } from './ColumnMenu';

interface Props extends HTMLAttributes<HTMLDivElement> {
  order: number;
  children?: React.ReactNode;
}
const MenuItemStyled = styled.div`
  display: flex;
  min-width: 100px;
  padding: 8px 20px;
  cursor: pointer;
  border: none;
  width: 100%;
  background-color: #fff;
  font-weight: 500;
  color: #2c3e50;
  transition: all 250ms;
  &.active {
    color: #1890ff !important;
    border-right: 3px solid #1890ff;
    background-color: #ecf5ff;
  }
  &:hover {
    color: #1890ff;
    background-color: #ecf5ff;
  }
`;
const MenuItem: React.FC<Props> = (props) => {
  const { children, order } = props;
  const { defaultOrder } = useContext(columnMenuCtx);
  return (
    <MenuItemStyled
      data-order={order}
      className={classNames('order', defaultOrder === order ? 'active' : '')}
    >
      {children}
    </MenuItemStyled>
  );
};
MenuItem.defaultProps = {
  children: ''
};

export default MenuItem;
