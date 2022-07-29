import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import Tab from '../Tabs/Tab';
import Tabs from '../Tabs/Tabs';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  options: React.ReactNode[];
}
const SegmentedStyled = styled.div``;
const Segmented: React.FC<Props> = (props) => {
  const { children, options, ...rest } = props;
  const onChange = (key: string) => {
    console.log(key);
  };
  return (
    <SegmentedStyled {...rest}>
      <Tabs defaultKey="1" callback={onChange} bgc="black" segmented>
        {options.map((item, index) => {
          return <Tab tab={item} index={(index + 1).toString()} key={Math.random()} />;
        })}
      </Tabs>
    </SegmentedStyled>
  );
};
Segmented.defaultProps = {
  children: ''
};

export default Segmented;
