import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  children?: React.ReactNode;
}
const ItemGroupStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  > .label {
    color: #a1a1a1;
    padding: 8px 10px;
  }
  > .content {
    flex-grow: 10;
  }
`;
const XXX = styled.div`
  padding: 0 8px;
  &:hover {
    background-color: #1890ff;
  }
`;

const ItemGroup: React.FC<Props> = (props) => {
  const { children, label, ...rest } = props;
  return (
    <ItemGroupStyled {...rest}>
      <div className="label">{label}</div>
      <div className="content">
        {React.Children.map(children, (child) => {
          return <XXX>{child}</XXX>;
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
