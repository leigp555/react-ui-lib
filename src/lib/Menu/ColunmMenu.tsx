import React, { HTMLAttributes, useCallback } from 'react';
import styled from 'styled-components';

interface Ctx {
  callback: (order: number) => void;
}
export const columnMenuCtx = React.createContext<Ctx>(null!);

interface Props extends HTMLAttributes<HTMLDivElement> {
  callback?: (key: number) => void;
  children?: React.ReactNode;
}

const MenuStyled = styled.div`
  display: inline-block;
`;
const ColumnMenu: React.FC<Props> = (props) => {
  const { children, callback } = props;
  const fn = useCallback(callback!, []);
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = { callback: fn };
  return (
    <MenuStyled>
      <columnMenuCtx.Provider value={value}>{children}</columnMenuCtx.Provider>
    </MenuStyled>
  );
};
ColumnMenu.defaultProps = {
  callback: () => {},
  children: ''
};

export default ColumnMenu;
