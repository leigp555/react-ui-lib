import React, { HTMLAttributes, ReactElement, useState } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { CommonStyle } from '../common/common';
import ErrorIcon from '../icons/error.svg';
import ClearIcon from '../icons/clear.svg';
import EyeShow from '../icons/eye_show.svg';
import EyeHidden from '../icons/eye_hidden.svg';

// 不知道react的虚拟节点什么类型所以扩充vNode类型来消除ts警告
type VNode = ReactElement & { type: { name: string } };
export type Tip = {
  id: number;
  message: string;
};

export type Validate = {
  required?: boolean;
  pattern?: RegExp;
  message: string;
};

interface Props extends HTMLAttributes<HTMLDivElement> {
  type?: string;
  tips?: Tip[];
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
  .my-node-enter {
    opacity: 0;
  }
  .my-node-enter-active {
    opacity: 1;
    transition: opacity 300ms;
  }
  .my-node-exit {
    opacity: 1;
  }
  .my-node-exit-active {
    opacity: 0;
    transition: opacity 300ms;
  }
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border-radius: 2px;
  background-color: #fff;
`;

type IconProp = {
  rightPadding: number;
  leftPadding: number;
  errors: string[];
  type?: string;
};
const InputStyled = styled.input.attrs((props: IconProp) => ({ type: props.type }))`
  border: none;
  outline: none;
  width: 100%;
  min-height: 2em;
  padding: ${(props: IconProp) => {
    const leftP = props.leftPadding ? `1.9em` : '10px';
    const rightP = props.rightPadding ? `${1.65 * props.rightPadding}em` : '10px';
    return `8px ${rightP} 8px ${leftP}`;
  }};
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
  cursor: pointer;
`;

const CommonDom = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(calc(100% + 5px));
`;
const CommonPer = styled.div`
  > p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  display: flex;
  align-items: center;
`;
const ErrorDom = styled(CommonDom)`
  height: 1em;
  color: #ff4d4f;
`;
const PerError = styled(CommonPer)`
  gap: 2px;
  font-size: 12px;
`;
const TipDom = styled(CommonDom)`
  color: #8f8f8f;
  padding: 8px 0;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 3px 2px 1px rgba(0, 0, 0, 0.1), 1px 0 2px 1px rgba(0, 0, 0, 0.1),
    -1px 0 2px 1px rgba(0, 0, 0, 0.1);
`;
const PerTip = styled(CommonPer)`
  > p {
    width: 100%;
    padding: 10px 10px;
  }

  &:hover {
    background-color: #f5f5f5;
  }
`;
// 功能
// 1.提示输入
// 2.验证内容 ok
// 3.支持icon ok
// 4.自定义border/阴影
// 5.支持清除

const Input: React.FC<Props> = (props) => {
  const { children, tips, callback, type, allowClear, rules, ...rest } = props;
  const [value, setValue] = useState<string>('');
  const [errs, setError] = useState<string[]>([]);
  const [tipShow, setTipShow] = useState<boolean>(false);
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
    const tipHandle = (e: React.MouseEvent<HTMLParagraphElement>) => {
      const el = e.target as HTMLParagraphElement;
      setValue(el.innerText);
    };
    const blurTip = () => {
      setTipShow(false);
    };
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
                  callback!('');
                }}
              />
            </IconsRight>
          </span>
          <InputStyled
            rightPadding={rightNode.length + (allowClear ? 1 : 0)}
            leftPadding={leftNode.length}
            type={inputType}
            errors={errs}
            {...rest}
            value={value}
            onChange={(e) => getValue(e)}
            onFocus={() => {
              setTipShow(true);
            }}
            onBlur={blurTip}
          />
          <ErrorDom style={{ display: errs[0] ? 'block' : 'none' }}>
            {errs.map((item) => {
              return (
                <PerError key={item + Math.random().toString()}>
                  <ErrorIcon fill="red" width="1em" height="1em" />
                  <p>{item}</p>
                </PerError>
              );
            })}
          </ErrorDom>
          <CSSTransition in={tipShow} timeout={300} unmountOnExit classNames="my-node">
            <TipDom style={{ display: tips![0] ? 'block' : 'none' }}>
              {tips!.map((item) => {
                return (
                  <PerTip key={item.message + Math.random().toString()}>
                    <p
                      role="presentation"
                      onMouseDown={(e: React.MouseEvent<HTMLParagraphElement>) => {
                        tipHandle(e);
                        setTipShow(false);
                      }}
                    >
                      {item.message}
                    </p>
                  </PerTip>
                );
              })}
            </TipDom>
          </CSSTransition>
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
  tips: [],
  allowClear: false,
  callback: () => {},
  children: ''
};

export default Input;
