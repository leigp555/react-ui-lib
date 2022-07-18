import React, { HTMLAttributes, useCallback } from 'react';
import styled from 'styled-components';

interface Ctx {
  callback: (order: number) => void;
}
export const menuCtx = React.createContext<Ctx>(null!);

interface Props extends HTMLAttributes<HTMLDivElement> {
  callback?: (key: number) => void;
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
  const { children, callback, ...rest } = props;
  const fn = useCallback(callback!, []);
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = { callback: fn };
  return (
    <MenuStyled {...rest}>
      <menuCtx.Provider value={value}>{children}</menuCtx.Provider>
    </MenuStyled>
  );
};
Menu.defaultProps = {
  callback: () => {},
  children: ''
};

export default Menu;
