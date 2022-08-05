import React, { HTMLAttributes, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import './index.scss';

export interface AffixProps extends HTMLAttributes<HTMLDivElement> {
  container?: HTMLElement | null;
  children?: React.ReactNode;
  offsetTop?: number;
  offsetBottom?: number;
  rowPosition?: 'start' | 'center' | 'end';
}

const Affix: React.FC<AffixProps> = (props) => {
  const { children, container, offsetBottom, rowPosition, offsetTop, ...rest } = props;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const leftPosition = useRef<number>(0);
  const [shouldFixed, setFixed] = useState(false);
  const scrollHandle = () => {
    const { top } = containerRef.current!.getBoundingClientRect();
    if (top < offsetTop!) setFixed(true);
    if (top > offsetTop!) setFixed(false);
  };
  useEffect(() => {
    const { left } = contentRef.current!.getBoundingClientRect();
    leftPosition.current = left;
    if (container) container.addEventListener('scroll', scrollHandle);
    return () => {
      document.removeEventListener('scroll', scrollHandle);
    };
  }, []);
  return (
    <div
      className="ui-affix-wrap"
      {...rest}
      ref={containerRef}
      style={{ justifyContent: rowPosition }}
    >
      <div
        style={{ top: `${offsetTop}px`, left: `${leftPosition.current}px` }}
        className={classNames('content', `${shouldFixed ? 'fixed' : ''}`)}
        ref={contentRef}
      >
        {children}
      </div>
    </div>
  );
};
Affix.defaultProps = {
  children: '',
  offsetBottom: 0,
  offsetTop: 0,
  rowPosition: 'start',
  container: document.body
};

export default Affix;
