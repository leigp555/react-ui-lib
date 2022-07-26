import React, { HTMLAttributes, useMemo, useState } from 'react';
import styled from 'styled-components';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  defaultKey?: string;
}
const CollapseStyled = styled.div`
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

type Ctx = {
  currentOrder: string;
  setOrder: React.Dispatch<React.SetStateAction<string>>;
};

export const ctx = React.createContext<Ctx>(null!);

const Collapse: React.FC<Props> = (props) => {
  const { children, defaultKey, ...rest } = props;
  const [currentOrder, setOrder] = useState<string>(defaultKey!);
  const value = useMemo(() => {
    return { currentOrder, setOrder };
  }, [currentOrder]);
  return (
    <ctx.Provider value={value}>
      <CollapseStyled {...rest}>{children}</CollapseStyled>
    </ctx.Provider>
  );
};
Collapse.defaultProps = {
  children: '',
  defaultKey: 'null'
};

export default Collapse;
