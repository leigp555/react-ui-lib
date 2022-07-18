import React, { HTMLAttributes, useContext } from 'react';
import styled from 'styled-components';
import { menuCtx } from './Menu ';

interface Props extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  children?: React.ReactNode;
}
type PropsStyled = {
  needBorder: boolean;
};

const SubMenuStyled = styled.div`
  position: relative;
  > .wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-8px);
    display: flex;
    flex-direction: column;
    gap: 10px;
    &:hover {
      > .content {
        display: block;
      }
    }
    > .content {
      display: none;
      background-color: #fff;
      box-shadow: ${(props: PropsStyled) =>
        props.needBorder ? '0 0 2px 1px rgba(0, 0,0,.2)' : 'none'};
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
  const needBorder = !!children;
  const getOrder = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.target as HTMLDivElement;
    const orderStr = el.getAttribute('data-order');
    if (orderStr) {
      const order = parseInt(orderStr, 10);
      callback(order);
    }
  };
  return (
    <SubMenuStyled needBorder={needBorder} {...rest}>
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
