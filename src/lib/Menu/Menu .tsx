import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}
const MenuStyled = styled.div`
  background-color: orange;
  display: flex;
  gap: 120px;
  align-items: center;
  min-height: 40px;
  position: relative;
  padding: 0 50px;
`;
const Menu: React.FC<Props> = (props) => {
  const { children, ...rest } = props;
  return <MenuStyled {...rest}>{children}</MenuStyled>;
};
Menu.defaultProps = {
  children: ''
};

export default Menu;
