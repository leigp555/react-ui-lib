import React, { HTMLAttributes, useContext } from 'react';
import styled from 'styled-components';
import { callbackProvider } from './Dropdown ';

export interface DropdownItemProps extends HTMLAttributes<HTMLDivElement> {
  order: number;
  children: React.ReactNode;
}
const DropdownItemStyled = styled.div`
  position: relative;
  white-space: nowrap;
  display: flex;
  left: 0;
  background-color: #ffffff;
`;

const DropdownItem: React.FC<DropdownItemProps> = (props) => {
  const { children, order, ...rest } = props;
  const { callback } = useContext(callbackProvider);
  const divClick = () => {
    callback(order);
  };
  return (
    <DropdownItemStyled {...rest} onClick={divClick}>
      {children}
    </DropdownItemStyled>
  );
};

export default DropdownItem;
