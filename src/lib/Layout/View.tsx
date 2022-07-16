import React from 'react';
import styled from 'styled-components';

// View组件横向布局

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

type Props = {
  children: React.ReactNode;
};
const View: React.FC<Props> = ({ children }) => {
  return <Wrap>{children}</Wrap>;
};

export default View;
