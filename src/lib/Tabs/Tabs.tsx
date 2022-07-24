import React, { HTMLAttributes, ReactElement, ReactNode, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

type VNode = ReactElement & { type: { name: string } };

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  callback?: (key: string) => void;
  defaultKey?: string;
}

const TabsStyled = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
`;

const TabName = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  gap: 30px;
  //border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  > span.title {
    padding: 10px 0;
  }

  > span.indicator {
    position: absolute;
    bottom: 0;
    height: 2px;
    left: 0;
    transition: all 250ms;
    background-color: orange;
  }
`;

const Content = styled.div`
  padding: 20px 0;
`;

const Tabs: React.FC<Props> = (props) => {
  const { children, onChange, defaultKey, ...rest } = props;
  const [currentIndex, setIndex] = useState<string>(defaultKey!);
  const spanRef = useRef<ReactNode[]>([]);
  const spanWrap = useRef<HTMLDivElement | null>(null);
  const indicator = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    Array.from(spanWrap.current!.children).forEach((item) => {
      if (item.getAttribute('data-order') === currentIndex) {
        const el = item as HTMLSpanElement;
        const { width, left: left1 } = el.getBoundingClientRect();
        const { left: left2 } = spanWrap.current!.getBoundingClientRect();
        indicator.current!.style.width = `${width}px`;
        indicator.current!.style.left = `${left1 - left2}px`;
      }
    });
  });
  const tabClick = (e: React.MouseEvent<HTMLSpanElement>, index: string) => {
    setIndex(index);
    const el = e.target as HTMLSpanElement;
    const { width, left: left1 } = el.getBoundingClientRect();
    const { left: left2 } = spanWrap.current!.getBoundingClientRect();
    indicator.current!.style.width = `${width}px`;
    indicator.current!.style.left = `${left1 - left2}px`;
  };

  const render = () => {
    let currentVNode!: VNode;
    React.Children.map(children, (child) => {
      const vNode = child as VNode;
      if (
        React.isValidElement(vNode) &&
        vNode.type.name === 'Tab' &&
        vNode.props.index === currentIndex
      ) {
        currentVNode = vNode;
        spanRef.current.push(
          <span
            className="title"
            role="presentation"
            key={`${vNode.props.tab + vNode.props.index}`}
            onClick={(e: React.MouseEvent<HTMLSpanElement>) => tabClick(e, vNode.props.index)}
            data-order={vNode.props.index}
          >
            {vNode.props.tab}
          </span>
        );
      } else if (
        React.isValidElement(vNode) &&
        vNode.type.name === 'Tab' &&
        vNode.props.index !== currentIndex
      ) {
        spanRef.current.push(
          <span
            className="title"
            role="presentation"
            key={`${vNode.props.tab + vNode.props.index}`}
            onClick={(e: React.MouseEvent<HTMLSpanElement>) => tabClick(e, vNode.props.index)}
            data-order={vNode.props.index}
          >
            {vNode.props.tab}
          </span>
        );
      }
    });
    return (
      <>
        <TabName ref={spanWrap}>
          {spanRef.current}
          <span className="indicator" ref={indicator} />
        </TabName>
        <Content>{currentVNode}</Content>
      </>
    );
  };
  return <TabsStyled {...rest}>{render()}</TabsStyled>;
};
Tabs.defaultProps = {
  callback: () => {},
  defaultKey: '1',
  children: ''
};

export default Tabs;
