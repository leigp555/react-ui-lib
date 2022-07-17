import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
const DropdownItemStyled = styled.div`
  position: relative;
  white-space: nowrap;
  display: flex;
  flex-direction: column;
  gap: 10px;
  bottom: 0;
  left: 0;
  margin-top: 5px;
  padding: 15px 10px;
  background-color: orange;
`;

const DropdownItem: React.FC<Props> = (props) => {
  const { children, ...rest } = props;
  return <DropdownItemStyled {...rest}>{children}</DropdownItemStyled>;
};

export default DropdownItem;
