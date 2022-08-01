import React, { HTMLAttributes, ReactElement } from 'react';
import styled from 'styled-components';

interface Props extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  children?: React.ReactNode;
}
// 不知道react的虚拟节点什么类型所以扩充vNode类型来消除ts警告
type VNode = ReactElement & { type: { name: string } };

const ItemGroupStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  &.copy {
    //padding-left: calc(1em);
  }

  > .label {
    color: #a1a1a1;
    padding: 16px 10px 8px 10px;
  }
  > .content {
  }
`;

const ItemGroup: React.FC<Props> = (props) => {
  const { children, label, ...rest } = props;
  return (
    <ItemGroupStyled {...rest}>
      {React.Children.map(children, (child) => {
        const vNode = child as VNode;
        if (React.isValidElement(vNode) && vNode.type.name === 'ItemGroup') {
          return <ItemGroupStyled className="copy">{vNode}</ItemGroupStyled>;
        }
        if (React.isValidElement(vNode) && vNode.type.name === 'Label') {
          return <div className="label">{vNode}</div>;
        }
        return <div className="content">{vNode}</div>;
      })}
    </ItemGroupStyled>
  );
};

ItemGroup.defaultProps = {
  label: '',
  children: ''
};
export default ItemGroup;
