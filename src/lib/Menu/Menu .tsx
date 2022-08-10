import React, { Dispatch, HTMLAttributes, SetStateAction, useMemo } from 'react';
import styled from 'styled-components';
import { CommonStyle } from '../common/common';

type Ctx =
  | {
      setOrder: Dispatch<SetStateAction<number>>;
      defaultOrder: number;
    }
  | { setOrder: null; defaultOrder: null };
export const menuCtx = React.createContext<Ctx>(null!);

export interface MenuProps extends HTMLAttributes<HTMLDivElement> {
  bgc?: string;
  justify?: 'center' | 'start' | 'end' | 'space-between' | 'space-around';
  children?: React.ReactNode;
  setOrder?: Dispatch<SetStateAction<number>> | null;
  defaultOrder?: number | null;
}

type PropsStyled = { bgc?: string };

const MenuStyled = styled(CommonStyle)`
  background-color: ${(props: PropsStyled) => (props.bgc ? 'bgc' : 'inherit')};
  display: flex;
  gap: 120px;
  align-items: center;
  min-height: 40px;
  position: relative;
  padding: 0 50px;
`;
const Menu: React.FC<MenuProps> = (props) => {
  const { children, bgc, setOrder, defaultOrder, ...rest } = props;
  const value = useMemo(() => {
    if (setOrder && defaultOrder) {
      return { setOrder, defaultOrder };
    }
    return { setOrder: null, defaultOrder: null };
  }, [defaultOrder]);
  return (
    <MenuStyled bgc={bgc} {...rest}>
      <menuCtx.Provider value={value}>{children}</menuCtx.Provider>
    </MenuStyled>
  );
};
Menu.defaultProps = {
  bgc: 'inherit',
  justify: 'center',
  children: '',
  setOrder: null,
  defaultOrder: null
};

export default Menu;
