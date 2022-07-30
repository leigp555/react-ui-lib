import React, { HTMLAttributes, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  offsetTop?: number;
  offsetBottom?: number;
}

const AffixStyled = styled.div`
  .content.fixed {
    position: fixed;
  }
`;
const Affix: React.FC<Props> = (props) => {
  const { children, offsetBottom, offsetTop, ...rest } = props;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [shouldFixed, setFixed] = useState(false);
  const scrollHandle = () => {
    const { top } = containerRef.current!.getBoundingClientRect();
    if (top < offsetTop!) setFixed(true);
    if (top > offsetTop!) setFixed(false);
  };
  useEffect(() => {
    document.addEventListener('scroll', scrollHandle);
    return () => {
      document.removeEventListener('scroll', scrollHandle);
    };
  }, []);
  return (
    <AffixStyled {...rest} ref={containerRef}>
      <div
        style={{ top: `${offsetTop}px` }}
        className={classNames('content', `${shouldFixed ? 'fixed' : ''}`)}
      >
        {children}
      </div>
    </AffixStyled>
  );
};
Affix.defaultProps = {
  children: '',
  offsetBottom: 0,
  offsetTop: 0
};

export default Affix;
