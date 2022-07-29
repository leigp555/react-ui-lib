import React, { HTMLAttributes, ReactElement, ReactNode, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

type VNode = ReactElement & { type: { name: string } };

interface Props extends HTMLAttributes<HTMLDivElement> {
  bgc?: string;
  position?: 'center' | 'start' | 'end';
  children?: React.ReactNode;
  callback?: (key: string) => void;
  defaultKey?: string;
  gap?: number;
  segmented?: boolean;
}

type TabNameProp = {
  bgc?: string;
  position?: 'center' | 'start' | 'end';
  gap?: number;
};

const TabsStyled = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: ${(props: TabNameProp) => `${props.gap}px`};
`;

const TabName = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  gap: 30px;
  justify-content: ${(props: TabNameProp) => props.position};
  //border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  &.segmented {
    gap: 0;
    border-bottom: none;
    background-color: #ededed;
    box-shadow: 4px 4px 1px 1px rgba(237, 237, 237, 1), -4px 4px 1px 1px rgba(237, 237, 237, 1),
      4px -4px 1px 1px rgba(237, 237, 237, 1), -4px -4px 1px 1px rgba(237, 237, 237, 1);
    > span.title {
      padding: 6px 15px;
    }

    > span.indicator {
      height: 100%;
      background-color: #ffffff;
    }
  }

  > span.title {
    padding: 10px 0;
    position: relative;
    z-index: 10;
    color: #262626;
    -moz-user-select: none; /*火狐*/
    -webkit-user-select: none; /*webkit浏览器*/
    -ms-user-select: none; /*IE10*/
    -khtml-user-select: none; /*早期浏览器*/
    user-select: none;
  }

  > span.indicator {
    position: absolute;
    bottom: 0;
    height: 3px;
    transition: all 250ms;
    background-color: ${(props: TabNameProp) => props.bgc};
  }
`;

const Content = styled.div`
  padding: 10px 0;
`;

const Tabs: React.FC<Props> = (props) => {
  const { children, callback, gap, segmented, position, bgc, defaultKey, ...rest } = props;
  const [currentIndex, setIndex] = useState<string>(defaultKey!);
  const spanRef = useRef<ReactNode[]>([]);
  const lastSpan = useRef<HTMLSpanElement | null>(null);
  const spanWrap = useRef<HTMLDivElement | null>(null);
  const indicator = useRef<HTMLSpanElement | null>(null);
  useEffect(() => {
    Array.from(spanWrap.current!.children).forEach((item) => {
      if (item.getAttribute('data-order') === currentIndex) {
        if (lastSpan.current) lastSpan.current.style.color = '#262626';
        const el = item as HTMLSpanElement;
        lastSpan.current = el;
        el.style.color = bgc!;
        const { width, left: left1 } = el.getBoundingClientRect();
        const { left: left2 } = spanWrap.current!.getBoundingClientRect();
        indicator.current!.style.width = `${width}px`;
        indicator.current!.style.left = `${left1 - left2}px`;
      }
    });
  });
  const tabClick = (e: React.MouseEvent<HTMLSpanElement>, index: string) => {
    callback!(index);
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
            <span style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
              {vNode.props.tab}
            </span>
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
            <span style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
              {vNode.props.tab}
            </span>
          </span>
        );
      }
    });
    return (
      <>
        <TabName
          ref={spanWrap}
          bgc={bgc!}
          position={position!}
          className={classNames(`${segmented ? 'segmented' : ''}`)}
        >
          {spanRef.current}
          <span className="indicator" ref={indicator} />
        </TabName>
        <Content>{currentVNode}</Content>
      </>
    );
  };
  return (
    <TabsStyled gap={gap!} {...rest}>
      {render()}
    </TabsStyled>
  );
};
Tabs.defaultProps = {
  callback: () => {},
  defaultKey: '1',
  children: '',
  bgc: '#1890ff',
  position: 'start',
  gap: 30,
  segmented: false
};

export default Tabs;
