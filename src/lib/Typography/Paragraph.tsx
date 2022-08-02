import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

export interface ParagraphProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}
const ParagraphStyled = styled.p`
  word-break: break-all;
  white-space: break-spaces;
  margin-bottom: 14px;
  line-height: 1.5em;
`;
const Paragraph: React.FC<ParagraphProps> = (props) => {
  const { children, ...rest } = props;
  return <ParagraphStyled {...rest}>{children}</ParagraphStyled>;
};
Paragraph.defaultProps = {
  children: ''
};

export default Paragraph;
