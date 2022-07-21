import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}
const FormItemStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FormItem: React.FC<Props> = (props) => {
  const { children, ...rest } = props;
  return <FormItemStyled {...rest}>{children}</FormItemStyled>;
};
FormItem.defaultProps = {
  children: ''
};

export default FormItem;
