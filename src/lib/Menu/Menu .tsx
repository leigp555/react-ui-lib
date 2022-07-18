import React, { HTMLAttributes, useCallback } from 'react';
import styled from 'styled-components';

interface Ctx {
  callback: (order: number) => void;
}
export const menuCtx = React.createContext<Ctx>(null!);

interface Props extends HTMLAttributes<HTMLDivElement> {
  callback?: (key: number) => void;
  bgc?: string;
  children?: React.ReactNode;
}

type PropsStyled = { bgc?: string };

const MenuStyled = styled.div`
  background-color: ${(props: PropsStyled) => (props.bgc ? 'bgc' : 'inherit')};
  display: flex;
  gap: 120px;
  align-items: center;
  min-height: 40px;
  position: relative;
  padding: 0 50px;
`;
const Menu: React.FC<Props> = (props) => {
  const { children, bgc, callback } = props;
  const fn = useCallback(callback!, []);
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = { callback: fn };
  return (
    <MenuStyled bgc={bgc}>
      <menuCtx.Provider value={value}>{children}</menuCtx.Provider>
    </MenuStyled>
  );
};
Menu.defaultProps = {
  callback: () => {},
  bgc: 'inherit',
  children: ''
};

export default Menu;
