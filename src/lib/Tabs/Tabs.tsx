import React, { HTMLAttributes, ReactElement, useRef, useState } from 'react';
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
    width: 50px;
    left: 0;
    background-color: orange;
  }
`;

const Content = styled.div`
  padding: 20px 0;
`;

const Tabs: React.FC<Props> = (props) => {
  const { children, onChange, defaultKey, ...rest } = props;
  const [currentIndex, setIndex] = useState<string>(defaultKey!);
  const spanRef = useRef<HTMLSpanElement | null>(null);
  const spanWrap = useRef<HTMLDivElement | null>(null);
  const indicator = useRef<HTMLSpanElement | null>(null);

  const tabClick = (e: React.MouseEvent<HTMLSpanElement>, index: string) => {
    setIndex(index);
    const el = e.target as HTMLSpanElement;
    const { width, left: left1 } = el.getBoundingClientRect();
    const { left: left2 } = spanWrap.current!.getBoundingClientRect();
    indicator.current!.style.width = `${width}px`;
    indicator.current!.style.left = `${left1 - left2}px`;
  };

  const render = () => {
    const tabName: { index: string; tab: string }[] = [];
    let currentVNode!: VNode;
    React.Children.map(children, (child) => {
      const vNode = child as VNode;
      tabName.push({ index: vNode.props.index, tab: vNode.props.tab });
      if (
        React.isValidElement(vNode) &&
        vNode.type.name === 'Tab' &&
        vNode.props.index === currentIndex
      ) {
        currentVNode = vNode;
      }
    });
    return (
      <>
        <TabName ref={spanWrap}>
          {tabName.map((item) => (
            <span
              className="title"
              ref={spanRef}
              role="presentation"
              key={`${item.tab + item.index}`}
              onClick={(e: React.MouseEvent<HTMLSpanElement>) => tabClick(e, item.index)}
              data-order={item.index}
            >
              {item.tab}
            </span>
          ))}
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
