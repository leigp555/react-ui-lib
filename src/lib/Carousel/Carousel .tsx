import React, { HTMLAttributes, ReactElement, useEffect, useState } from 'react';
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './index.scss';

interface Props extends HTMLAttributes<HTMLDivElement> {
  dot?: boolean;
  children?: React.ReactNode;
}
// 不知道react的虚拟节点什么类型所以扩充vNode类型来消除ts警告
type VNode = ReactElement & { type: { name: string } };

const CarouselStyled = styled.div`
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

type SpanWrapProps = {
  dot: boolean;
};
const SpanWrap = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: ${(props: SpanWrapProps) => (props.dot ? 'flex' : 'none')};
  gap: 10px;
`;

type SpanProp = {
  selfOrder: number;
  currentOrder: number;
};
const SpanRadius = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${(props: SpanProp) =>
    props.selfOrder === props.currentOrder ? 'orange' : '#fff'};
`;

const Carousel: React.FC<Props> = (props) => {
  const { children, dot, ...rest } = props;
  const [index, setIndex] = useState<number>(1);
  const kids = children as ReactElement[];
  useEffect(() => {
    const len = kids.length;
    const time = setInterval(() => {
      setIndex((state) => {
        if (state >= len) {
          state = 1;
        } else {
          state += 1;
        }
        return state;
      });
    }, 3000);
    return () => {
      window.clearInterval(time);
    };
  }, []);
  const render = () => {
    return React.Children.map(children, (child) => {
      const vNode = child as VNode;
      if (
        React.isValidElement(vNode) &&
        vNode.type.name === 'CarouselItem' &&
        vNode.props.order === index
      ) {
        return vNode;
      }
    });
  };
  const createSpan = () => {
    const dom: ReactElement[] = [];
    for (let i = 0; i < kids.length; i++) {
      dom.push(<SpanRadius key={i} selfOrder={i + 1} currentOrder={index} data-order={i + 1} />);
    }
    return dom;
  };
  const selectedIndex = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.target as HTMLSpanElement;
    if (el.tagName.toLowerCase() === 'span') {
      const newOrder = parseInt(el.getAttribute('data-order') || '1', 10);
      setIndex(newOrder);
    }
  };
  return (
    <CarouselStyled {...rest}>
      <TransitionGroup mode="out-in">
        <CSSTransition appear key={Math.random().toString()} classNames="btn" timeout={1000}>
          <div>{render()}</div>
        </CSSTransition>
      </TransitionGroup>
      <SpanWrap onClick={(e: React.MouseEvent<HTMLDivElement>) => selectedIndex(e)} dot={dot!}>
        {createSpan()}
      </SpanWrap>
    </CarouselStyled>
  );
};
Carousel.defaultProps = {
  dot: true,
  children: []
};

export default Carousel;
