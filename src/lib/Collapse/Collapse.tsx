import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  defaultKey: string;
}
const CollapseStyled = styled.div`
  width: 100%;
`;
const Collapse: React.FC<Props> = (props) => {
  const { children, defaultKey, ...rest } = props;
  return <CollapseStyled {...rest}>{children}</CollapseStyled>;
};
Collapse.defaultProps = {
  children: ''
};

export default Collapse;
