import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props extends HTMLAttributes<HTMLDivElement> {
  order: number;
  children?: React.ReactNode;
}
const MenuItemStyled = styled.div`
  display: flex;
  min-width: 100px;
  padding: 8px 10px;
  cursor: pointer;
  border: none;
  width: 100%;
  background-color: #fff;
  :hover {
    color: #1890ff;
  }
`;
const MenuItem: React.FC<Props> = (props) => {
  const { children, order } = props;
  return (
    <MenuItemStyled data-order={order} className="order">
      {children}
    </MenuItemStyled>
  );
};
MenuItem.defaultProps = {
  children: ''
};

export default MenuItem;
