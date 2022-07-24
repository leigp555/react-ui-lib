import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { colourNameToHex, colours } from './colorNameToHex';
import { colorToRGB } from './colorToRGB';

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
  const colorTransform = (colour: string, opt: number) => {
    if (colour.charAt(0) === '#') {
      return colorToRGB(colour, opt);
    }
    if (colours[colour.toLowerCase()]) {
      return colorToRGB(colourNameToHex(colour), opt);
    }
    colorToRGB('#000000', opt);
  };
  return (
    <TagStyled
      {...rest}
      bgc={colorTransform(color!, 0.1)}
      bc={colorTransform(color!, 0.8)}
      fc={colorTransform(color!, 1)}
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
