import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { CommonStyle } from '../common/common';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  size?: number | string;
  align?: 'start' | 'center' | 'end' | 'baseline';
  direction?: 'row' | 'column';
}
const SpaceStyled = styled(CommonStyle)`
  display: flex;
`;
const Space: React.FC<Props> = (props) => {
  const { children, size, align, direction } = props;
  return (
    <div>
      <SpaceStyled gap={size} direction={direction} aline={align}>
        {children}
      </SpaceStyled>
    </div>
  );
};
Space.defaultProps = {
  children: '',
  size: 8,
  align: 'start',
  direction: 'row'
};

export default Space;
