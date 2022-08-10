import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

export interface CarouselItemProps extends HTMLAttributes<HTMLDivElement> {
  order: number;
  children?: React.ReactNode;
  name?: string;
}
const CarouselItemStyled = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
const CarouselItem: React.FC<CarouselItemProps> = (props) => {
  const { children, order, ...rest } = props;
  return <CarouselItemStyled {...rest}>{children}</CarouselItemStyled>;
};
CarouselItem.defaultProps = {
  children: '',
  name: 'CarouselItem'
};

export default CarouselItem;
