import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}
const AutoCompleteStyled = styled.div`
  border: 1px solid red;
`;
const AutoComplete: React.FC<Props> = (props) => {
  const { children, ...rest } = props;
  return <AutoCompleteStyled {...rest}>xxx</AutoCompleteStyled>;
};
AutoComplete.defaultProps = {
  children: ''
};

export default AutoComplete;
