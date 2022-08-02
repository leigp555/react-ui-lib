import React, { HTMLAttributes, useRef } from 'react';
import styled from 'styled-components';

export interface BackTopProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  action: React.ReactNode;
}

const Wrap = styled.div`
  position: relative;
  overflow-y: scroll;
  scroll-behavior: smooth;
  height: 100%;
  width: 100%;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    background-color: #c3c3c3;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  > .content {
    line-height: 1.5em;
    margin-bottom: 50px;
    padding: 10px 10px;
  }
  > .action {
    position: sticky;
    display: inline-block;
    bottom: 20px;
    left: 100%;
    transform: translateX(-10px);
  }
`;

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
    <Wrap ref={wrapRef}>
      <div className="content">{children}</div>
      <div role="presentation" className="action" onClick={goTop}>
        {action}
      </div>
    </Wrap>
  );
};

BackTop.defaultProps = {
  children: ''
};

export default BackTop;
