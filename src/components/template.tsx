import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
const TemplateStyled = styled.div`
  border: 1px solid red;
`;
const Template: React.FC<Props> = (props) => {
  const { children, ...rest } = props;
  return <TemplateStyled {...rest}>xxx</TemplateStyled>;
};

export default Template;
