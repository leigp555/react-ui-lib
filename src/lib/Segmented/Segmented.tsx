import React, { Dispatch, HTMLAttributes, SetStateAction } from 'react';
import styled from 'styled-components';
import Tab from '../Tabs/Tab';
import Tabs from '../Tabs/Tabs';

export interface SegmentedProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  options: React.ReactNode[];
  value: React.ReactNode;
  changeValue: Dispatch<SetStateAction<React.ReactNode>>;
}
const SegmentedStyled = styled.div``;
const Segmented: React.FC<SegmentedProps> = (props) => {
  const { children, options, value, changeValue, ...rest } = props;
  const onChange = (key: string) => {
    const index = parseInt(key, 10);
    changeValue(options[index]);
  };
  return (
    <SegmentedStyled {...rest}>
      <Tabs
        defaultKey={options.indexOf(value).toString()}
        callback={onChange}
        bgc="black"
        segmented
      >
        {options.map((item, index) => {
          return <Tab tab={item} index={index.toString()} key={Math.random()} />;
        })}
      </Tabs>
    </SegmentedStyled>
  );
};
Segmented.defaultProps = {
  children: ''
};

export default Segmented;
