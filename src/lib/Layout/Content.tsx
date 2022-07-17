import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props extends HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}
// 元素横向排列
const MainStyled = styled.div`
  display: flex;
  gap: 10px;
`;

const Content: React.FC<Props> = (props) => {
  const { children, ...rest } = props;
  return <MainStyled {...rest}>{children}</MainStyled>;
};

Content.defaultProps = {
  children: ''
};

export default Content;
