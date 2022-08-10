import React, { HTMLAttributes, useRef } from 'react';
import './index.scss';

export type Tip = {
  id: number;
  message: React.ReactNode;
};
export interface DropdownProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  tips?: Tip[];
}

const Dropdown: React.FC<DropdownProps> = (props) => {
  const { children, tips, ...rest } = props;
  const tipWrapRef = useRef<HTMLDivElement | null>(null);
  const tipRef = useRef<HTMLDivElement | null>(null);
  const open = () => {
    tipWrapRef.current!.style.height = `${tipRef.current!.getBoundingClientRect().height}px`;
  };
  const close = () => {
    tipWrapRef.current!.style.height = '0px';
  };
  return (
    <div className="ui-Dropdown-wrap" {...rest}>
      <div onFocus={open} onBlur={close}>
        {children}
      </div>
      <div className="tipWrap" ref={tipWrapRef}>
        <div className="tip" ref={tipRef}>
          {tips?.map((item) => {
            return (
              <div role="presentation" className="perTip" key={Math.random()}>
                {item.message}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
Dropdown.defaultProps = {
  children: '',
  tips: []
};

export default Dropdown;
