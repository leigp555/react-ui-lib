import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import Col from '../Grid/Col';
import Row from '../Grid/Row';

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  position?: 'left' | 'right' | 'center';
  offset?: number;
}
const DividerStyled = styled.div`
  padding: 16px 0;
  display: flex;
  align-items: center;
  > .inner {
    height: 22px;
    flex-grow: 10;
    display: flex;
    align-items: center;
  }
`;

const Divider: React.FC<DividerProps> = (props) => {
  const { children, position, offset, ...rest } = props;
  const render = () => {
    if (position === 'left') {
      return (
        <Row height={1}>
          <Col span={offset || 0} bgc="rgba(0,0,0,.1)" />
          <div style={{ padding: '0 14px', fontWeight: 700 }}>{children}</div>
          <Col bgc="rgba(0,0,0,.1)" />
        </Row>
      );
    }
    if (position === 'center') {
      return (
        <Row height={1}>
          <Col bgc="rgba(0,0,0,.1)" />
          <div style={{ padding: '0 14px', fontWeight: 700 }}>{children}</div>
          <Col bgc="rgba(0,0,0,.1)" />
        </Row>
      );
    }
    if (position === 'right') {
      return (
        <Row height={1}>
          <Col bgc="rgba(0,0,0,.1)" />
          <div style={{ padding: '0 14px', fontWeight: 700 }}>{children}</div>
          <Col span={offset || 0} bgc="rgba(0,0,0,.1)" />
        </Row>
      );
    }
  };
  return (
    <DividerStyled {...rest}>
      <div className="inner">{render()}</div>
    </DividerStyled>
  );
};
Divider.defaultProps = {
  children: '',
  position: 'center',
  offset: 0
};

export default Divider;
