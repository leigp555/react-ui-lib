import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
const DropdownItemStyled = styled.div`
  position: absolute;
  white-space: nowrap;
  bottom: 0;
  left: 0;
  border: 1px solid red;
  transform: translateY(100%);
`;

const DropdownItem: React.FC<Props> = (props) => {
  const { children, ...rest } = props;
  return <DropdownItemStyled {...rest}>{children}</DropdownItemStyled>;
};

export default DropdownItem;
