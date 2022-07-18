import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  children?: React.ReactNode;
}
const ItemGroupStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 8px 10px;
  > .label {
    color: #a1a1a1;
  }
  > .content {
    padding-left: 10px;
  }
`;
const ItemGroup: React.FC<Props> = (props) => {
  const { children, label, ...rest } = props;
  return (
    <ItemGroupStyled {...rest}>
      <div className="label">{label}</div>
      <div className="content">{children}</div>
    </ItemGroupStyled>
  );
};

ItemGroup.defaultProps = {
  label: 'itemGroup',
  children: ''
};
export default ItemGroup;
