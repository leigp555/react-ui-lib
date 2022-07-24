import React, { HTMLAttributes, ReactElement, useState } from 'react';
import styled from 'styled-components';

type VNode = ReactElement & { type: { name: string } };
interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  callback?: (key: string) => void;
  defaultKey?: string;
}
const TabsStyled = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;
const TabName = styled.div`
  cursor: pointer;
  display: flex;
  gap: 30px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  > span {
    padding: 10px 0;
    border-bottom: 1px solid red;
  }
`;
const Content = styled.div`
  padding: 20px 0;
`;

const Tabs: React.FC<Props> = (props) => {
  const { children, onChange, defaultKey, ...rest } = props;
  const [currentIndex, setIndex] = useState<string>(defaultKey!);
  const render = () => {
    const tabName: { index: string; tab: string }[] = [];
    let currentVNode!: VNode;
    React.Children.map(children, (child) => {
      const vNode = child as VNode;
      tabName.push({ index: vNode.props.index, tab: vNode.props.tab });
      if (
        React.isValidElement(vNode) &&
        vNode.type.name === 'Tab' &&
        vNode.props.index === currentIndex
      ) {
        currentVNode = vNode;
      }
    });

    return (
      <>
        <TabName>
          {tabName.map((item) => (
            <span
              role="presentation"
              key={`${item.tab + item.index}`}
              onClick={() => setIndex(item.index)}
            >
              {item.tab}
            </span>
          ))}
        </TabName>
        <Content>{currentVNode}</Content>
      </>
    );
  };

  return <TabsStyled {...rest}>{render()}</TabsStyled>;
};
Tabs.defaultProps = {
  callback: () => {},
  defaultKey: '1',
  children: ''
};

export default Tabs;
