import React, { HTMLAttributes, useRef } from 'react';
import styled from 'styled-components';
import { colourNameToHex, colours } from './colorNameToHex';
import { colorToRGB } from './colorToRGB';
import CancelIcon from '../icons/cha.svg';

interface Props extends HTMLAttributes<HTMLDivElement> {
  color?: string;
  children?: React.ReactNode;
  callback?: () => void;
  closeable?: boolean;
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
  gap: 10px;
  font-size: 12px;
  padding: 4px 7px;
  text-align: center;
  white-space: nowrap;
  border-radius: 2px;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans,
    sans-serif, apple color emoji, segoe ui emoji, Segoe UI Symbol, noto color emoji;
`;
const Content = styled.div`
  display: inline-flex;
  gap: 2px;
  align-items: center;
`;
const Cancel = styled.span`
  display: flex;
  cursor: pointer;
`;

const Tag: React.FC<Props> = (props) => {
  const { children, color, closeable, callback, ...rest } = props;
  const divRef = useRef<HTMLDivElement | null>(null);
  const colorTransform = (colour: string, opt: number) => {
    if (colour.charAt(0) === '#') {
      return colorToRGB(colour, opt);
    }
    if (colours[colour.toLowerCase()]) {
      return colorToRGB(colourNameToHex(colour), opt);
    }
    colorToRGB('#000000', opt);
  };
  const cancel = () => {
    if (divRef.current) divRef.current?.remove();
    console.log(divRef.current);
  };
  return (
    <TagStyled
      ref={divRef}
      {...rest}
      bgc={colorTransform(color!, 0.1)}
      bc={colorTransform(color!, 0.7)}
      fc={colorTransform(color!, 0.9)}
    >
      <Content>{children}</Content>
      <Cancel onClick={cancel}>
        <CancelIcon width="0.9em" height="0.9em" />
      </Cancel>
    </TagStyled>
  );
};
Tag.defaultProps = {
  children: '',
  color: '#f7bd19',
  callback: () => {},
  closeable: false
};

export default Tag;
