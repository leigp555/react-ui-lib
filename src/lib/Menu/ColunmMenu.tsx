import React, { Dispatch, HTMLAttributes, SetStateAction, useMemo } from 'react';
import styled from 'styled-components';

interface Ctx {
  setOrder: Dispatch<SetStateAction<number>>;
  defaultOrder: number;
}
export const columnMenuCtx = React.createContext<Ctx>(null!);

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  setOrder: Dispatch<SetStateAction<number>>;
  defaultOrder: number;
}

const MenuStyled = styled.div``;
const ColumnMenu: React.FC<Props> = (props) => {
  const { children, setOrder, defaultOrder } = props;
  const value = useMemo(() => {
    return { setOrder, defaultOrder };
  }, [defaultOrder]);
  return (
    <MenuStyled>
      <columnMenuCtx.Provider value={value}>{children}</columnMenuCtx.Provider>
    </MenuStyled>
  );
};
ColumnMenu.defaultProps = {
  children: ''
};

export default ColumnMenu;
