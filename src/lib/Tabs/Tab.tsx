import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props extends HTMLAttributes<HTMLDivElement> {
  tab?: string;
  index: string;
  children?: React.ReactNode;
}
const TabStyled = styled.div``;
const Tab: React.FC<Props> = (props) => {
  const { children, tab, index, ...rest } = props;
  return (
    <TabStyled {...rest}>
      <div className="content">{children}</div>
    </TabStyled>
  );
};
Tab.defaultProps = {
  children: '',
  tab: '标签'
};

export default Tab;
