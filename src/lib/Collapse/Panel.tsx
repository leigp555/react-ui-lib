import React, { HTMLAttributes, useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import RightIcon from '../icons/right2.svg';
import { ctx } from './Collapse';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  header: string;
  order: string;
}
const PanelStyled = styled.div`
  display: flex;
  flex-direction: column;
  > .header {
    padding: 12px 16px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    gap: 10px;
    align-items: center;
    background-color: #fafafa;
    > span {
      display: flex;
      align-items: center;
    }
  }
  > .body {
    line-height: 1.5em;
    background-color: #ffffff;
    height: 0;
    overflow: hidden;
    transition: all 300ms;
  }
`;

const Panel: React.FC<Props> = (props) => {
  const { children, header, order, ...rest } = props;
  const { currentOrder, setOrder } = useContext(ctx);
  const divRef = useRef<HTMLDivElement | null>(null);
  const divRef2 = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (currentOrder === order) {
      divRef2.current!.style.height = `${divRef.current!.getBoundingClientRect().height}px`;
    } else {
      divRef2.current!.style.height = `${0}px`;
    }
  }, [currentOrder]);
  return (
    <PanelStyled {...rest}>
      <div
        role="presentation"
        className="header"
        onClick={() => {
          if (currentOrder !== order) {
            setOrder(order);
          } else {
            setOrder('null');
          }
        }}
      >
        <span
          style={{
            transform: currentOrder === order ? 'rotate(90deg)' : 'rotate(0)',
            transition: 'all 250ms'
          }}
        >
          <RightIcon width="1em" height="1em" fill="black" />
        </span>

        <p>{header}</p>
      </div>
      <div
        className={classNames('body', `${currentOrder === order ? 'open' : 'close'}`)}
        ref={divRef2}
      >
        <div ref={divRef} style={{ padding: '16px' }}>
          {children}
        </div>
      </div>
    </PanelStyled>
  );
};
Panel.defaultProps = {
  children: ''
};

export default Panel;
