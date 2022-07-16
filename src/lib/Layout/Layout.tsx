import React from 'react';
import styled from 'styled-components';

// layout组件横向布局

const Wrap = styled.div`
  display: flex;
`;

type Props = {
  children: React.ReactNode;
};
const Layout: React.FC<Props> = ({ children }) => {
  return <Wrap>{children}</Wrap>;
};

export default Layout;
