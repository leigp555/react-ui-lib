import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

export interface TextProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  strong?: boolean;
  code?: boolean;
  keyboard?: boolean;
  mark?: boolean;
}
const TextStyled = styled.span`
  .ui-keyboard {
    padding: 0.15em 0.4em 0.1em;
    background-color: #f9f9f9;
    border: 1px solid rgba(100, 100, 100, 0.2);
    font-size: 0.9em;
    border-radius: 2px;
  }
  .ui-marked {
    background-color: orange;
  }
`;
const Text: React.FC<TextProps> = (props) => {
  const { children, strong, keyboard, mark, code, ...rest } = props;
  const render = () => {
    if (strong) {
      return <strong>{children}</strong>;
    }
    if (keyboard) {
      return <span className="ui-keyboard">{children}</span>;
    }
    if (mark) {
      return <mark className="ui-marked">{children}</mark>;
    }
    if (code) {
      return <code>{children}</code>;
    }
  };
  return <TextStyled {...rest}>{render()}</TextStyled>;
};
Text.defaultProps = {
  children: '',
  strong: false,
  code: false,
  keyboard: false,
  mark: false
};

export default Text;
