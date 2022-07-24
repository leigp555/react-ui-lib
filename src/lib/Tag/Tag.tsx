import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props extends HTMLAttributes<HTMLDivElement> {
  color?: string;
  children?: React.ReactNode;
}

type StyledProps = {
  bgc?: string;
  bc?: string;
  fc?: string;
};

const TagStyled = styled.div`
  border: 1px solid ${(props: StyledProps) => props.bc};
  background-color: ${(props: StyledProps) => props.bgc};
  color: ${(props: StyledProps) => props.fc};
  -webkit-filter: brightness(60%);
  display: inline-flex;
  align-items: center;
  gap: 2px;
  font-size: 12px;
  padding: 4px 7px;
  text-align: center;
  white-space: nowrap;
  border-radius: 2px;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans,
    sans-serif, apple color emoji, segoe ui emoji, Segoe UI Symbol, noto color emoji;
`;
const Tag: React.FC<Props> = (props) => {
  const { children, color, ...rest } = props;
  const colorToRGB = (colorStr: string, opt: number) => {
    let finallyCor = '#f7bd19';
    let color1: number;
    let color2: number;
    let color3: number;
    if (colorStr.charAt(0) === '#') {
      colorStr = colorStr.substring(1);
      if (colorStr.length === 3) {
        colorStr =
          colorStr[0] + colorStr[0] + colorStr[1] + colorStr[1] + colorStr[2] + colorStr[2];
      } else if (colorStr.length === 8) {
        colorStr = colorStr.substring(0, 6);
      }
      if (/^[0-9a-fA-F]{6}$/.test(colorStr)) {
        color1 = parseInt(colorStr.substring(0, 2), 16);
        color2 = parseInt(colorStr.substring(2, 4), 16);
        color3 = parseInt(colorStr.substring(4, 6), 16);
        finallyCor = `rgba(${color1},${color2},${color3},${opt})`;
      }
    }
    return finallyCor;
  };

  return (
    <TagStyled
      {...rest}
      bgc={colorToRGB(color!, 0.1)}
      bc={colorToRGB(color!, 0.8)}
      fc={colorToRGB(color!, 1)}
    >
      {children}
    </TagStyled>
  );
};
Tag.defaultProps = {
  children: '',
  color: '#f7bd19'
};

export default Tag;
