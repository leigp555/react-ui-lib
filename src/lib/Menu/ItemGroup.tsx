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
  padding-left: 5px;
  > .label {
    color: #a1a1a1;
    padding: 8px 5px;
  }
  > .content {
    margin-left: 5px;
  }
`;

const ItemGroup: React.FC<Props> = (props) => {
  const { children, label, ...rest } = props;
  return (
    <ItemGroupStyled {...rest}>
      <div className="label">{label}</div>
      <div className="content">
        {React.Children.map(children, (child) => {
          const vNode = child as VNode;
          if (React.isValidElement(vNode) && vNode.type.name !== 'ItemGroup') {
            return vNode;
          }
          return <ItemGroupStyled>{vNode}</ItemGroupStyled>;
        })}
      </div>
    </ItemGroupStyled>
  );
};

ItemGroup.defaultProps = {
  label: 'itemGroup',
  children: ''
};
export default ItemGroup;
