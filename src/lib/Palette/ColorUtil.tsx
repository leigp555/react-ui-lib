import React from 'react';
import styled from 'styled-components';
import { Tip } from '../Tip/Tip';

const Wrap = styled.div`
  display: flex;
  width: 306px;
  gap: 1px;
  flex-wrap: wrap;
`;
const StyledItem = styled.div`
  color: #222222;
  width: 100px;
  height: 60px;
`;

type Props = {
  colors: string[];
};
const ColorUtil: React.FC<Props> = ({ colors }) => {
  const domEl: JSX.Element[] = [];
  for (let i = 0; i < 15; i++) {
    domEl.push(
      <StyledItem key={`${i}${colors[i]}`} style={{ backgroundColor: colors[i] }}>
        {colors[i]}
      </StyledItem>
    );
  }
  const copyColor = async (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.target as HTMLDivElement;
    if (el.tagName.toLowerCase() === 'div') {
      try {
        await navigator.clipboard.writeText(el.innerText);
        Tip('success', `复制成功`, 2000);
        // eslint-disable-next-line @typescript-eslint/no-shadow,no-empty
      } catch (e) {
        Tip('error', `复制成功`, 2000);
      }
    }
  };
  return <Wrap onClick={(e: React.MouseEvent<HTMLDivElement>) => copyColor(e)}>{domEl}</Wrap>;
};

export default ColorUtil;
