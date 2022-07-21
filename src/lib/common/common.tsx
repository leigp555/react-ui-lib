import styled from 'styled-components';

type PropsStyled = {
  color?: string;
  bgc?: string;
  height?: number | string;
  width?: number | string;
  gap?: number | string;
  alignSelf?: 'center' | 'start' | 'end';
  justifySelf?: 'center' | 'start' | 'end' | 'space-between' | 'space-around';
  justify?: 'center' | 'start' | 'end' | 'space-between' | 'space-around';
  aline?: 'center' | 'start' | 'end';
  direction?: 'column' | 'row';
};

export const CommonStyle = styled.div`
  color: ${(props: PropsStyled) => props.color};
  background-color: ${(props: PropsStyled) => props.bgc};
  height: ${(props: PropsStyled) =>
    typeof props.height === 'number' ? `${props.height}px` : props.height};
  width: ${(props: PropsStyled) =>
    typeof props.width === 'number' ? `${props.width}px` : props.width};
  align-self: ${(props: PropsStyled) => props.alignSelf};
  justify-self: ${(props: PropsStyled) => props.justifySelf};
  gap: ${(props: PropsStyled) => (typeof props.gap === 'number' ? `${props.gap}px` : props.gap)};
  justify-content: ${(props: PropsStyled) => props.justify};
  align-items: ${(props: PropsStyled) => props.aline};
  flex-direction: ${(props: PropsStyled) => props.direction};
`;

export const Action = styled.div`
  .my-node-enter {
    opacity: 0;
  }
  .my-node-enter-active {
    opacity: 1;
    transition: opacity 300ms;
  }
  .my-node-exit {
    opacity: 1;
  }
  .my-node-exit-active {
    opacity: 0;
    transition: opacity 300ms;
  }
`;
