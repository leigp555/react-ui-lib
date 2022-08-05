import React, { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';

export interface TabProps extends HTMLAttributes<HTMLDivElement> {
  tab?: ReactNode;
  index: string;
  children?: React.ReactNode;
}
const TabStyled = styled.div``;
const Tab: React.FC<TabProps> = (props) => {
  const { children, tab, index, ...rest } = props;
  const render = () => {
    if (children) {
      return (
        <TabStyled {...rest}>
          <div className="content">{children}</div>
        </TabStyled>
      );
    }
    return <div style={{ display: 'none' }} />;
  };
  return render();
};
Tab.defaultProps = {
  children: '',
  tab: '标签'
};

export default Tab;
