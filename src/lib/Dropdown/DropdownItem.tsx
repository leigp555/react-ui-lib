import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
const DropdownItemStyled = styled.div`
  display: inline-block;
  border: 1px solid red;
`;

const DropdownItem: React.FC<Props> = (props) => {
  const { children, ...rest } = props;
  return <DropdownItemStyled {...rest}>{children}</DropdownItemStyled>;
};

export default DropdownItem;
