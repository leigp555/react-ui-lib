import React from 'react';
import styled from 'styled-components';
import ColorUtil from './ColorUtil';
import { colorKind } from './color';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const StyledSection = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

type Props = {
  title?: string;
  description?: string;
  kind:
    | 'red'
    | 'orange'
    | 'yellow'
    | 'Yellow_green'
    | 'green'
    | 'turquoise'
    | 'blue'
    | 'Blue_purple'
    | 'purple'
    | 'amaranth';
};

const ColorGroup: React.FC<Props> = ({ title, description, kind }) => {
  return (
    <Wrap>
      <p style={{ color: '#56688a', fontWeight: 700 }}>{title}</p>
      <p style={{ color: '#666696', fontSize: '14px' }}>{description}</p>
      <StyledSection>
        <ColorUtil colors={colorKind[kind].slice(0, 15)} />
        <ColorUtil colors={colorKind[kind].slice(15, 30)} />
        <ColorUtil colors={colorKind[kind].slice(30, 45)} />
        <ColorUtil colors={colorKind[kind].slice(45, 60)} />
      </StyledSection>
    </Wrap>
  );
};

ColorGroup.defaultProps = {
  title: '',
  description: ''
};
export default ColorGroup;
