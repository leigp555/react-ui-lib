import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

export interface InputIconProps extends HTMLAttributes<HTMLDivElement> {
  position?: 'left' | 'right';
  children?: React.ReactNode;
}
const TemplateStyled = styled.div`
  display: flex;
  justify-content: center;
`;
const InputIcon: React.FC<InputIconProps> = (props) => {
  const { children, ...rest } = props;
  return <TemplateStyled {...rest}>{children}</TemplateStyled>;
};
InputIcon.defaultProps = {
  position: 'left',
  children: ''
};

export default InputIcon;
