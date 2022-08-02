import React, { HTMLAttributes, ReactElement, useCallback, useContext } from 'react';
import styled from 'styled-components';
import { Validate } from '../Input/Input';
import { ctx } from './Form';

export interface FormItemProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  rules?: Validate[];
  children?: React.ReactNode;
}
// 不知道react的虚拟节点什么类型所以扩充vNode类型来消除ts警告
type VNode = ReactElement & { type: { name: string } };

const FormItemStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormItem: React.FC<FormItemProps> = (props) => {
  const { user, setUser, finishCallback, haveErr, setErr } = useContext(ctx);
  const { children, label, rules, ...rest } = props;

  const callback = useCallback(
    (value: string, err: string[]) => {
      const userObj: { [key: string]: string } = {};
      userObj[label!] = value;
      setUser((state) => ({ ...state, ...userObj }));
      const errObj: { [key: string]: string[] } = {};
      errObj[label!] = err;
      setErr((state) => {
        return { ...state, ...errObj };
      });
    },
    [haveErr, user]
  );
  const buttonClick = useCallback(() => {
    let err = false;
    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    for (const key in haveErr) {
      if (haveErr[key][0]) {
        err = true;
      }
    }
    if (err) {
      finishCallback({ fail: haveErr });
    } else {
      finishCallback({ success: user });
    }
  }, [user, haveErr]);
  const render = () => {
    return React.Children.map(children, (child) => {
      const vNode = child as VNode;
      if (React.isValidElement(vNode) && vNode.type.name === 'Input') {
        return React.cloneElement(vNode, { callback, rules });
      }
      if (React.isValidElement(vNode) && vNode.type.name === 'Button') {
        return React.cloneElement(vNode, {
          onClick: () => {
            buttonClick();
          }
        });
      }
      return vNode;
    });
  };

  return <FormItemStyled {...rest}>{render()}</FormItemStyled>;
};
FormItem.defaultProps = {
  rules: [],
  label: '请修改标签',
  children: ''
};

export default React.memo(FormItem);
