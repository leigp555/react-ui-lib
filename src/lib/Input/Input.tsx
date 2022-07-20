import React, { HTMLAttributes, ReactElement, useState } from 'react';
import styled from 'styled-components';
import { CommonStyle } from '../common/common';
import ErrorIcon from '../icons/error.svg';

// 不知道react的虚拟节点什么类型所以扩充vNode类型来消除ts警告
type VNode = ReactElement & { type: { name: string } };

export type Validate = {
  required?: boolean;
  pattern?: RegExp;
  message: string;
  mode: 'onChange' | 'onblur';
};

interface Props extends HTMLAttributes<HTMLDivElement> {
  type?: string;
  rules?: Validate[];
  placeholder?: string;
  children?: React.ReactNode;
}

type PropsStyled = {
  errors: string[];
};

const Wrap = styled.div`
  border-radius: 2px;
  width: 100%;
  border: 1px solid ${(props: PropsStyled) => (props.errors[0] ? '#ff4d4f' : '#1890ff')};
  &:hover {
    outline: 1px solid ${(props: PropsStyled) => (props.errors[0] ? '#ff4d4f' : '#1890ff')};
  }
`;
const InputWrap = styled(CommonStyle)`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 2px;
  background-color: #fff;
`;
const InputStyled = styled.input`
  border: none;
  outline: none;
  width: 100%;
  min-height: 2em;
  padding: 8px 1.9em 8px 1.9em;
  &:focus {
    outline: 2px solid ${(props: PropsStyled) => (props.errors[0] ? '#ff4d4f' : '#1890ff')};
    box-shadow: 0 0 3px 3px
      ${(props: PropsStyled) =>
        props.errors[0] ? 'rgba(255, 77, 79, 0.2)' : 'rgba(24, 144, 255, 0.2)'};
  }
`;

const IconCommon = styled.span`
  width: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;
const IconsLeft = styled(IconCommon)`
  left: 0;
`;
const IconsRight = styled(IconCommon)`
  right: 0;
`;
const ErrorDom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(calc(100% + 5px));
  width: 100%;
  height: 1.5em;
  color: red;
`;
const PerError = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  font-size: 12px;
`;
// 功能
// 1.提示输入
// 2.验证内容 ok
// 3.支持icon ok
// 4.自定义border/阴影
// 5.支持清除

const Input: React.FC<Props> = (props) => {
  const { children, rules, ...rest } = props;
  const [value, setValue] = useState<string>('');
  const [errs, setError] = useState<string[]>([]);
  const render = () => {
    return React.Children.map(children, (child) => {
      const el = child as VNode;
      if (el.props.position === 'left') {
        return <IconsLeft>{child}</IconsLeft>;
      }
      if (el.props.position === 'right') {
        return <IconsRight>{child}</IconsRight>;
      }
      return child;
    });
  };

  const validateFn = (newValue: string) => {
    rules!.forEach((item) => {
      if (item.pattern) {
        const reg = new RegExp(item.pattern!, 'i');
        if (!reg.test(newValue) && errs.indexOf(item.message) < 0) {
          setError((state) => [...state, item.message]);
        } else if (reg.test(newValue) && errs.indexOf(item.message) >= 0) {
          const index = errs.indexOf(item.message);
          setError((state) => {
            state.splice(index, 1);
            return state;
          });
        }
      }
    });
  };
  const getValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    validateFn(newValue);
  };
  return (
    <Wrap errors={errs}>
      <InputWrap>
        <>{render()}</>
        <InputStyled errors={errs} {...rest} value={value} onChange={(e) => getValue(e)} />
        <ErrorDom>
          {errs.map((item) => {
            return (
              <PerError key={item + Math.random().toString()}>
                <ErrorIcon fill="red" width="1em" height="1em" />
                <p>{item}</p>
              </PerError>
            );
          })}
        </ErrorDom>
      </InputWrap>
    </Wrap>
  );
};
Input.defaultProps = {
  type: 'text',
  placeholder: '请输入。。。',
  rules: [],
  children: ''
};

export default Input;
