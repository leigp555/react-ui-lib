import React, { HTMLAttributes } from 'react';
import styled, { keyframes } from 'styled-components';
import { CommonStyle } from '../common/common';
import Row from '../Grid/Row';
import Col from '../Grid/Col';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  span?: number;
  offset?: number | 'auto';
  height?: number;
}
const shine = keyframes`
  from{
    background-position: -468px 0;
  }
  to{
    background-position: 468px 0;
  }
 `;
const SkeletonItemStyled = styled(CommonStyle)`
  width: 100%;
  background: linear-gradient(
    66deg,
    rgba(232, 232, 232, 1) 0%,
    rgba(242, 242, 242, 1) 35%,
    rgba(232, 232, 232, 1) 83%,
    rgba(232, 232, 232, 1) 100%
  );
  background-size: 800px 45px;
  animation: ${shine} 1s infinite;
  &.circle {
    clip-path: circle(50%);
  }
`;
const SkeletonItem: React.FC<Props> = (props) => {
  const { children, span, offset, ...rest } = props;
  return (
    <Row>
      <Col span={span} offset={offset}>
        <SkeletonItemStyled {...rest} />
      </Col>
    </Row>
  );
};
SkeletonItem.defaultProps = {
  span: 100,
  offset: 0,
  height: 20,
  children: ''
};

export default SkeletonItem;
