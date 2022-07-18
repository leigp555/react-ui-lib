import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}
const LabelStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;
const Label: React.FC<Props> = (props) => {
  const { children, ...rest } = props;
  return <LabelStyled {...rest}>{children}</LabelStyled>;
};
Label.defaultProps = {
  children: ''
};

export default Label;
