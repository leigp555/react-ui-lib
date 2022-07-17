import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { CommonStyle } from '../common/common';
import Col from '../Grid/Col';

interface Props extends HTMLAttributes<HTMLHeadElement> {
  height?: number | string;
  width?: number | string;
  bgc?: string;
  children?: React.ReactNode;
}
const LayoutWrapStyled = styled(CommonStyle)`
  display: flex;
`;

const LayoutWrap: React.FC<Props> = (props) => {
  const { children, ...rest } = props;
  return (
    <LayoutWrapStyled {...rest}>
      <Col>{children}</Col>
    </LayoutWrapStyled>
  );
};
LayoutWrap.defaultProps = {
  height: '100%',
  width: '100%',
  children: '',
  bgc: 'inherit'
};

export default LayoutWrap;
