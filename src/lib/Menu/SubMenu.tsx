import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  children?: React.ReactNode;
}
const SubMenuStyled = styled.div`
  position: relative;
  > .wrap {
    &:hover {
      > .content {
        display: block;
      }
    }
    > .content {
      display: none;
      border: 1px solid black;
      position: absolute;
      bottom: 0;
      left: 0;
      transform: translateY(calc(100% + 10px));
    }
    > .label {
      cursor: pointer;
    }
  }
`;

const SubMenu: React.FC<Props> = (props) => {
  const { children, label, ...rest } = props;
  return (
    <SubMenuStyled {...rest}>
      <div className="wrap">
        <span className="label">{label}</span>
        <div className="content">{children}</div>
      </div>
    </SubMenuStyled>
  );
};
SubMenu.defaultProps = {
  label: '导航',
  children: ''
};

export default SubMenu;
