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
  margin-top: 5px;
  padding: 15px 10px;
  background-color: orange;
  transform: translateY(calc(100% + 5px));
`;

const DropdownItem: React.FC<Props> = (props) => {
  const { children, ...rest } = props;
  return <DropdownItemStyled {...rest}>{children}</DropdownItemStyled>;
};

export default DropdownItem;
