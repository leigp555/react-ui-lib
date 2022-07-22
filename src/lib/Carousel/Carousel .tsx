import React, { HTMLAttributes, ReactElement, useEffect, useState } from 'react';
import styled from 'styled-components';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './index.scss';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}
// 不知道react的虚拟节点什么类型所以扩充vNode类型来消除ts警告
type VNode = ReactElement & { type: { name: string } };

const CarouselStyled = styled.div`
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 350px;
  height: 200px;
`;

const Carousel: React.FC<Props> = (props) => {
  const { children, ...rest } = props;
  const [index, setIndex] = useState<number>(1);
  useEffect(() => {
    const kids = children as ReactElement[];
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
    }, 4000);
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
  render();
  return (
    <CarouselStyled {...rest}>
      <SwitchTransition mode="out-in">
        <CSSTransition appear key={Math.random().toString()} classNames="btn" timeout={1000}>
          <div>{render()}</div>
        </CSSTransition>
      </SwitchTransition>
    </CarouselStyled>
  );
};
Carousel.defaultProps = {
  children: []
};

export default Carousel;
