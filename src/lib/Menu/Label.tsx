import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

export interface LabelProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}
const LabelStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  font-weight: 700;
  color: #2c3e50;
  font-size: 16px;
`;
const Label: React.FC<LabelProps> = (props) => {
  const { children, ...rest } = props;
  return <LabelStyled {...rest}>{children}</LabelStyled>;
};
Label.defaultProps = {
  children: ''
};

export default Label;
