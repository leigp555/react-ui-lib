import styled from 'styled-components';

type PropsStyled = {
  color?: string;
  bgc?: string;
  height?: number | string;
  width?: number | string;
};

export const CommonStyle = styled.div`
  color: ${(props: PropsStyled) => props.color};
  background-color: ${(props: PropsStyled) => props.bgc};
  height: ${(props: PropsStyled) =>
    typeof props.height === 'number' ? `${props.height}px` : props.height};
  width: ${(props: PropsStyled) =>
    typeof props.width === 'number' ? `${props.width}px` : props.width};
`;
