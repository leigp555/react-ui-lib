import React, { HTMLAttributes, useRef } from 'react';
import './index.scss';

export type Tip = {
  id: number;
  message: string;
};
export interface AutoCompleteProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  tips?: Tip[];
  value: string | number;
  callback: (value: any) => void;
}

const AutoComplete: React.FC<AutoCompleteProps> = (props) => {
  const { children, tips, value, callback, ...rest } = props;
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
    callback(el.innerText);
  };
  return (
    <div className="ui-autoComplete-wrap" {...rest}>
      <input
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          callback(e.target.value);
        }}
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
    </div>
  );
};
AutoComplete.defaultProps = {
  children: '',
  tips: []
};

export default AutoComplete;
