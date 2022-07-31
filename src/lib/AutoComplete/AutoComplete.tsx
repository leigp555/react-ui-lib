import React, { Dispatch, HTMLAttributes, SetStateAction, useRef } from 'react';
import styled from 'styled-components';

export type Tip = {
  id: number;
  message: string;
};
interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  tips?: Tip[];
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}
const AutoCompleteStyled = styled.div`
  position: relative;
  > input {
    border: 1px solid rgba(100, 100, 100, 0.5);
    padding: 5px calc(1em + 15px) 5px 5px;
    border-radius: 3px;
    outline: none;
    max-width: 100%;
    :hover {
      border: 1px solid #1890ff;
    }
    :focus {
      border: 1px solid #1890ff;
      box-shadow: 0 0 4px 2px rgba(24, 144, 255, 0.2);
    }
  }
  > .icon {
    display: inline-flex;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
  > .tipWrap {
    width: 100%;
    background-color: white;
    cursor: pointer;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 10;
    height: 0;
    transition: height 150ms;
    overflow: hidden;
    transform: translateY(calc(100% + 2px));
    > .tip {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 4px;
      border-radius: 3px;
      border: 1px solid rgba(100, 100, 100, 0.5);
      max-height: 10em;
      overflow-y: auto;
      &::-webkit-scrollbar {
        //整个滚动条的宽高设置
        width: 6px; //宽高只有一个能生效，如果是横向滚动条高度生效，纵向滚动条宽度生效
        height: 8px;
      }
      &::-webkit-scrollbar-thumb {
        //滚动条滑块的设置
        border-radius: 3px;
        -moz-border-radius: 3px;
        -webkit-border-radius: 3px;
        background-color: #c3c3c3;
      }
      &::-webkit-scrollbar-track {
        //滚动条轨道设置
        background-color: transparent;
      }
      > .perTip {
        padding: 0 10px;
        &:first-child {
          margin-top: 10px;
        }
        &:last-child {
          margin-bottom: 10px;
        }
        &:hover {
          background-color: rgba(100, 100, 100, 0.2);
        }
      }
    }
  }
`;
const AutoComplete: React.FC<Props> = (props) => {
  const { children, tips, value, setValue, ...rest } = props;
  const tipWrapRef = useRef<HTMLDivElement | null>(null);
  const tipRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const open = () => {
    tipWrapRef.current!.style.height = `${tipRef.current!.getBoundingClientRect().height}px`;
  };
  const close = () => {
    tipWrapRef.current!.style.height = '0px';
  };
  const tipHandle = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.target as HTMLParagraphElement;
    setValue(el.innerText);
  };
  return (
    <AutoCompleteStyled>
      <input
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setValue(e.target.value);
        }}
        {...rest}
        ref={inputRef}
        type="text"
        onFocus={open}
        onBlur={close}
      />
      <div role="presentation" className="icon">
        {children}
      </div>
      <div className="tipWrap" ref={tipWrapRef}>
        <div className="tip" ref={tipRef}>
          {tips?.map((item) => {
            return (
              <div
                role="presentation"
                className="perTip"
                key={Math.random()}
                onMouseDown={(e: React.MouseEvent<HTMLDivElement>) => {
                  tipHandle(e);
                }}
              >
                {item.message}
              </div>
            );
          })}
        </div>
      </div>
    </AutoCompleteStyled>
  );
};
AutoComplete.defaultProps = {
  children: '',
  tips: []
};

export default AutoComplete;
