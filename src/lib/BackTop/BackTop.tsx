import React, { HTMLAttributes, useRef } from 'react';
import './index.scss';

export interface BackTopProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  action: React.ReactNode;
}

const BackTop: React.FC<BackTopProps> = (props) => {
  const { children, action } = props;
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const scrollHeight = useRef<number>(0);
  const goTop = () => {
    scrollHeight.current = wrapRef.current!.scrollTop;
    const step = scrollHeight.current / 10;
    const time = setInterval(() => {
      if (scrollHeight.current > 0) {
        wrapRef.current!.scrollTo(0, scrollHeight.current - step);
        scrollHeight.current -= step;
      } else {
        window.clearInterval(time);
      }
    }, 5);
  };
  return (
    <div className="ui-wrap" ref={wrapRef}>
      <div className="content">{children}</div>
      <div role="presentation" className="action" onClick={goTop}>
        {action}
      </div>
    </div>
  );
};

BackTop.defaultProps = {
  children: ''
};

export default BackTop;
