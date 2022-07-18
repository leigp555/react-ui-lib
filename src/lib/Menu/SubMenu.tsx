import React, { HTMLAttributes, useContext } from 'react';
import styled from 'styled-components';
import { menuCtx } from './Menu ';

interface Props extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  children?: React.ReactNode;
}
const SubMenuStyled = styled.div`
  position: relative;
  > .wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-10px);
    display: flex;
    flex-direction: column;
    gap: 10px;
    &:hover {
      > .content {
        display: block;
      }
    }
    > .content {
      display: block;
      background-color: #fff;
      border: 1px solid black;
    }
    > .label {
      cursor: pointer;
      white-space: nowrap;
    }
  }
`;

const SubMenu: React.FC<Props> = (props) => {
  const { children, label, ...rest } = props;
  const { callback } = useContext(menuCtx);
  const getOrder = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.target as HTMLButtonElement;
    const orderStr = el.getAttribute('data-order');
    if (orderStr) {
      const order = parseInt(orderStr, 10);
      callback(order);
    }
  };
  return (
    <SubMenuStyled {...rest}>
      <div className="wrap">
        <span className="label">{label}</span>
        <div
          className="content"
          role="presentation"
          onClick={(e: React.MouseEvent<HTMLDivElement>) => getOrder(e)}
        >
          {children}
        </div>
      </div>
    </SubMenuStyled>
  );
};
SubMenu.defaultProps = {
  label: '导航',
  children: ''
};

export default SubMenu;
