import React, { Dispatch, HTMLAttributes, SetStateAction, useMemo } from 'react';
import styled from 'styled-components';
import { CommonStyle } from '../common/common';

interface Ctx {
  setOrder: Dispatch<SetStateAction<number>>;
  defaultOrder: number;
}
export const menuCtx = React.createContext<Ctx>(null!);

interface Props extends HTMLAttributes<HTMLDivElement> {
  bgc?: string;
  justify?: 'center' | 'start' | 'end' | 'space-between' | 'space-around';
  children?: React.ReactNode;
  setOrder: Dispatch<SetStateAction<number>>;
  defaultOrder: number;
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
const Menu: React.FC<Props> = (props) => {
  const { children, bgc, setOrder, defaultOrder, ...rest } = props;
  const value = useMemo(() => {
    return { setOrder, defaultOrder };
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
  children: ''
};

export default Menu;
