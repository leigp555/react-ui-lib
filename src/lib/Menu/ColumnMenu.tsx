import React, { Dispatch, HTMLAttributes, SetStateAction, useMemo } from 'react';
import styled from 'styled-components';

type Ctx =
  | {
      setOrder: Dispatch<SetStateAction<number>>;
      defaultOrder: number;
    }
  | { setOrder: null; defaultOrder: null };
export const columnMenuCtx = React.createContext<Ctx>(null!);

export interface ColumnMenuProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  setOrder?: Dispatch<SetStateAction<number>> | null;
  defaultOrder?: number | null;
}

const MenuStyled = styled.div`
  display: flex;
  //user-select: none;
`;
const ColumnMenu: React.FC<ColumnMenuProps> = (props) => {
  const { children, setOrder, defaultOrder, ...rest } = props;
  const value = useMemo(() => {
    if (setOrder && defaultOrder) {
      return { setOrder, defaultOrder };
    }
    return { setOrder: null, defaultOrder: null };
  }, [defaultOrder]);
  return (
    <MenuStyled {...rest}>
      <columnMenuCtx.Provider value={value}>{children}</columnMenuCtx.Provider>
    </MenuStyled>
  );
};
ColumnMenu.defaultProps = {
  children: '',
  setOrder: null,
  defaultOrder: null
};

export default ColumnMenu;
