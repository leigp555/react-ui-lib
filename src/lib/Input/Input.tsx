import React, { HTMLAttributes, ReactElement, useState } from 'react';
import styled from 'styled-components';
import { CommonStyle } from '../common/common';
import ErrorIcon from '../icons/error.svg';
import ClearIcon from '../icons/clear.svg';
import EyeShow from '../icons/eye_show.svg';
import EyeHidden from '../icons/eye_hidden.svg';

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
  callback?: (value: string) => void;
  rules?: Validate[];
  placeholder?: string;
  allowClear?: boolean;
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

type IconProp = {
  rightPadding: number;
  errors: string[];
  type?: string;
};
const InputStyled = styled.input.attrs((props: IconProp) => ({ type: props.type }))`
  border: none;
  outline: none;
  width: 100%;
  min-height: 2em;
  padding: ${(props: IconProp) =>
    props.rightPadding ? `8px ${1.65 * props.rightPadding}em 8px 1.9em` : '8px 1em 8px 1.9em'};
  &:focus {
    outline: 2px solid ${(props: IconProp) => (props.errors[0] ? '#ff4d4f' : '#1890ff')};
    box-shadow: 0 0 3px 3px
      ${(props: IconProp) =>
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
  right: 10px;
  gap: 5px;
  width: 100px;
  display: flex;
  justify-content: end;
`;
const ErrorDom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(calc(100% + 5px));
  width: 100%;
  height: 1.5em;
  color: #ff4d4f;
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
  const { children, callback, type, allowClear, rules, ...rest } = props;
  const [value, setValue] = useState<string>('');
  const [errs, setError] = useState<string[]>([]);
  const [inputType, setInputType] = useState<string>(type || 'text');

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
    callback!(newValue);
  };
  const render = () => {
    const leftNode: VNode[] = [];
    const rightNode: VNode[] = [];
    React.Children.map(children, (child) => {
      const el = child as VNode;
      if (el && el.props.position && el.props.position === 'left') {
        leftNode.push(el);
      }
      if (el && el.props.position && el.props.position === 'right') {
        rightNode.push(el);
      }
    });
    return (
      <Wrap errors={errs}>
        <InputWrap>
          <IconsLeft>{leftNode}</IconsLeft>
          <span style={{ display: 'flex', gap: '4px' }}>
            <IconsRight>
              {rightNode}
              <EyeShow
                style={{ display: inputType === 'text' && type === 'password' ? 'inline' : 'none' }}
                fill="#bfbfbf"
                width="1em"
                height="1em"
                onClick={() => {
                  setInputType('password');
                }}
              />
              <EyeHidden
                style={{ display: inputType === 'password' ? 'inline' : 'none' }}
                fill="#bfbfbf"
                width="1em"
                height="1em"
                onClick={() => {
                  setInputType('text');
                }}
              />
              <ClearIcon
                style={{ display: allowClear ? 'inline' : 'none' }}
                fill="#bfbfbf"
                width="1em"
                height="1em"
                onClick={() => {
                  setValue('');
                }}
              />
            </IconsRight>
          </span>
          <InputStyled
            rightPadding={rightNode.length + (allowClear ? 1 : 0)}
            type={inputType}
            errors={errs}
            {...rest}
            value={value}
            onChange={(e) => getValue(e)}
          />
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
  return <>{render()}</>;
};
Input.defaultProps = {
  type: 'text',
  placeholder: '请输入。。。',
  rules: [],
  allowClear: false,
  callback: () => {},
  children: ''
};

export default Input;
