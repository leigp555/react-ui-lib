import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props extends HTMLAttributes<HTMLDivElement> {
  order: number;
  children?: React.ReactNode;
}
const CarouselItemStyled = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
const CarouselItem: React.FC<Props> = (props) => {
  const { children, order, ...rest } = props;
  return <CarouselItemStyled {...rest}>{children}</CarouselItemStyled>;
};
CarouselItem.defaultProps = {
  children: ''
};

export default CarouselItem;
