import React, { createContext, HTMLAttributes, useMemo, useState } from 'react';
import styled from 'styled-components';
import { CommonStyle } from '../common/common';

export interface FormProps extends HTMLAttributes<HTMLDivElement> {
  gap?: number | string;
  onFinish?: (value: { [key: string]: string }) => void;
  children?: React.ReactNode;
}
type Ctx = {
  user: { [key: string]: string };
  setUser: React.Dispatch<React.SetStateAction<User>>;
  haveErr: Err;
  setErr: React.Dispatch<React.SetStateAction<Err>>;
  finishCallback: (value: { [key: string]: any }) => void;
};
export const ctx = createContext<Ctx>(null!);

const FormStyled = styled(CommonStyle)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2em;
`;
type User = {
  [key: string]: string;
};
type Err = {
  [key: string]: string[];
};
const Form: React.FC<FormProps> = (props) => {
  const { children, onFinish, ...rest } = props;
  const [user, setUser] = useState<User>({});
  const [haveErr, setErr] = useState<Err>();
  const value = useMemo(
    () => ({ user, setUser, haveErr, setErr, finishCallback: onFinish }),
    [user]
  ) as Ctx;
  return (
    <ctx.Provider value={value}>
      <FormStyled {...rest}>{children}</FormStyled>
    </ctx.Provider>
  );
};
Form.defaultProps = {
  gap: '1.2em',
  onFinish: () => {},
  children: ''
};

export default Form;
