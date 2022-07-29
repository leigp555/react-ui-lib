import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  defaultRange: number;
}
const SliderStyled = styled.div`
  border: 1px solid red;
`;
const Slider: React.FC<Props> = (props) => {
  const { children, ...rest } = props;
  return <SliderStyled {...rest}>xxx</SliderStyled>;
};
Slider.defaultProps = {
  children: ''
};

export default Slider;
