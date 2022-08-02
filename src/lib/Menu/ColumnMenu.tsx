import React, { Dispatch, HTMLAttributes, SetStateAction, useMemo } from 'react';
import styled from 'styled-components';

interface Ctx {
  setOrder: Dispatch<SetStateAction<number>>;
  defaultOrder: number;
}
export const columnMenuCtx = React.createContext<Ctx>(null!);

export interface ColumnMenuProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  setOrder: Dispatch<SetStateAction<number>>;
  defaultOrder: number;
}

const MenuStyled = styled.div`
  display: flex;
  user-select: none;
`;
const ColumnMenu: React.FC<ColumnMenuProps> = (props) => {
  const { children, setOrder, defaultOrder, ...rest } = props;
  const value = useMemo(() => {
    return { setOrder, defaultOrder };
  }, [defaultOrder]);
  return (
    <MenuStyled {...rest}>
      <columnMenuCtx.Provider value={value}>{children}</columnMenuCtx.Provider>
    </MenuStyled>
  );
};
ColumnMenu.defaultProps = {
  children: ''
};

export default ColumnMenu;
